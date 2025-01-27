const { config: dotEnvConfig } = require("dotenv");
dotEnvConfig();

const { ethers } = require("ethers");

const RPC_ENDPOINT = process.env.INFURA_SEPOLIA_RPC_URL;
const ACCOUNT_PUBLIC_ADDRESS = process.env.ACCOUNT_PUBLIC_ADDRESS;

const provider = new ethers.JsonRpcProvider(RPC_ENDPOINT);

async function call() {
  const balanceInWei = await provider.getBalance(ACCOUNT_PUBLIC_ADDRESS);
  const balanceInEth = Number(ethers.formatEther(balanceInWei)).toFixed(5);
  console.log({ balance: balanceInEth });
}

call()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error({ error: err });
    process.exit(1);
  });
