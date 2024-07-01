import { ethers } from "ethers";
import dotenv from "dotenv";
import winston from "winston";

// Load environment variables from .env file
dotenv.config();



// Define the ABI of the bridge contracts
const bridgeAbi = [
  "event Send(bytes32 indexed transferId, address indexed sender, address indexed receiver, address token, uint256 amount, uint64 dstChainId, uint64 nonce, uint32 maxSlippage)"
];

// Define the Ethereum provider (e.g., Infura)
const ethProvider = new ethers.providers.InfuraProvider("sepolia", process.env.INFURA_PROJECT_ID);

// Define the BSC provider (e.g., BSC RPC endpoint)
const bscProvider = new ethers.providers.JsonRpcProvider(process.env.CYBA_RPC);

// Define the private key of the relayer (ensure this is securely managed)
const relayerPrivateKey = process.env.RELAYER_PRIVATE_KEY!;
const relayerWallet = new ethers.Wallet(relayerPrivateKey, bscProvider);

// Define the ABI and address of the bridge contracts
const bscBridgeAbi = [
  "function relay(bytes calldata _relayRequest, bytes[] calldata _sigs, address[] calldata _signers, uint256[] calldata _powers) external"
];
const ethBridgeAbi = [
  "function relay(bytes calldata _relayRequest, bytes[] calldata _sigs, address[] calldata _signers, uint256[] calldata _powers) external"
];

const cybaBridgeAddress = process.env.CYBA_BRIDGE_CONTRACT_ADDRESS!;
const ethBridgeAddress = process.env.ETH_BRIDGE_CONTRACT_ADDRESS!;

const cybaBridgeContract = new ethers.Contract(cybaBridgeAddress, bscBridgeAbi, relayerWallet);
const ethBridgeContract = new ethers.Contract(ethBridgeAddress, ethBridgeAbi, ethProvider);

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'relayer.log' })
  ]
});

// Function to handle the Send event and relay it to the other chain
const handleSendEvent = async (
  transferId: string,
  sender: string,
  receiver: string,
  token: string,
  amount: ethers.BigNumber,
  dstChainId: number,
  nonce: number,
  maxSlippage: number,
  sourceChain: string
) => {
  logger.info(`Send Event Detected on ${sourceChain}: Transfer ID: ${transferId}, Sender: ${sender}, Receiver: ${receiver}, Token: ${token}, Amount: ${ethers.utils.formatUnits(amount, 18)}, Destination Chain ID: ${dstChainId}, Nonce: ${nonce}, Max Slippage: ${maxSlippage}`);

  // Construct the relay request
  const relayRequest = ethers.utils.defaultAbiCoder.encode(
    ["address", "address", "address", "uint256", "uint64", "uint64", "bytes32"],
    [sender, receiver, token, amount, dstChainId, nonce, transferId]
  );

  // Sign the relay request
  const messageHash = ethers.utils.keccak256(relayRequest);
  const signature = await relayerWallet.signMessage(ethers.utils.arrayify(messageHash));
  const signatures = [signature];
  const signers = [relayerWallet.address];
  const powers = [1]; // Assuming a single signer with full power

  // Determine the target bridge contract based on the source chain
  const targetBridgeContract = sourceChain === "ETH" ? bscBridgeContract : ethBridgeContract;
  const targetProvider = sourceChain === "ETH" ? bscProvider : ethProvider;

  // Retry logic for the relay transaction
  const maxRetries = 3;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const tx = await targetBridgeContract.connect(relayerWallet).relay(relayRequest, signatures, signers, powers);
      logger.info(`Relay transaction sent: ${tx.hash}`);
      await tx.wait();
      logger.info("Relay transaction confirmed");
      break; // Exit the loop if the transaction is successful
    } catch (error) {
      logger.error(`Error relaying transaction (attempt ${attempt}): ${error.message}`);
      if (attempt === maxRetries) {
        logger.error("Max retries reached. Giving up on this transaction.");
      } else {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds before retrying
      }
    }
  }
};

// Listen for the Send event on Ethereum
ethBridgeContract.on("Send", (transferId, sender, receiver, token, amount, dstChainId, nonce, maxSlippage) => {
  handleSendEvent(transferId, sender, receiver, token, amount, dstChainId, nonce, maxSlippage, "ETH");
});

// Listen for the Send event on BSC
cybaBridgeContract.on("Send", (transferId, sender, receiver, token, amount, dstChainId, nonce, maxSlippage) => {
  handleSendEvent(transferId, sender, receiver, token, amount, dstChainId, nonce, maxSlippage, "CYBA");
});

logger.info("Listening for Send events on both Ethereum and CYBA...");