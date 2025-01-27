const {config: dotEnvConfig} = require('dotenv')
dotEnvConfig();

const {ethers} = require('ethers')


const RPC_ENDPOINT = process.env.INFURA_SEPOLIA_RPC_URL;
const ACCOUNT_PUBLIC_ADDRESS = process.env.METAMASK_PRIVATE_KEY;