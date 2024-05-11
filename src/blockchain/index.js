const fetch = require("node-fetch");
const { Alchemy, Network } = require("alchemy-sdk");
const Wallet = require("ethereumjs-wallet").default;
require("dotenv").config();
var ethers = require("ethers");

const config = {
  apiKey: process.env.ALCHEMY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

// Function to get NFTs for a specified owner
async function getNFTsForOwner(account_address) {
  const endpoint = `https://eth-mainnet.g.alchemy.com/nft/v3/${process.env.ALCHEMY}/getNFTsForOwner?owner=${account_address}&pageSize=10`;
  console.log(endpoint);
  const options = {
    method: "GET",
    headers: { accept: "application/json" },
  };

  try {
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      throw new Error(`HTTP Error: Status ${response.status}`);
    }

    const data = await response.json();
    const nfts = data.ownedNfts;
    const nftDetails = nfts.map((nft) => ({
      nftName: nft.name,
      nftSymbol: nft.contract.symbol,
      nftId: nft.tokenId,
      description: nft.description,
    }));

    return { success: true, data: nftDetails };
  } catch (error) {
    console.error("Error fetching NFTs:", error);
    return { success: false, error: error.message };
  }
}

// Function to get non-zero ERC20 token balances
async function getERC20Balance(account_address) {
  try {
    const balances = await alchemy.core.getTokenBalances(account_address);
    const nonZeroBalances = balances.tokenBalances.filter(
      (token) => token.tokenBalance !== "0"
    );

    let results = nonZeroBalances.map(async (token) => {
      const metadata = await alchemy.core.getTokenMetadata(
        token.contractAddress
      );
      const balance =
        Number(token.tokenBalance) / Math.pow(10, metadata.decimals);
      return `${metadata.name}: ${balance.toFixed(2)} ${metadata.symbol}`;
    });

    results = await Promise.all(results);

    return { success: true, data: results };
  } catch (error) {
    console.error("Error fetching ERC20 balances:", error);
    return { success: false, error: error.message };
  }
}

// Function to generate a new Ethereum wallet
async function generateWallet() {
  const wallet = Wallet.generate();
  return {
    privateKey: wallet.getPrivateKeyString(),
    address: wallet.getAddressString(),
  };
}

// Function to fetch contract source code
async function fetchContractSourceCode(account_address) {
  try {
    const apiKey = process.env.ETHERSCAN_API_KEY;
    const url = `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${account_address}&apikey=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.status !== "1") {
      throw new Error(`API error! message: ${data.message}`);
    }

    return { success: true, data: data.result[0].SourceCode };
  } catch (error) {
    console.error("Failed to fetch contract source code:", error);
    return { success: false, error: error.message };
  }
}

async function getUnixTimestamp() {
  return Math.floor(Date.now() / 1000);
}

async function weiToEther(wei) {
  const weiBN = ethers.BigNumber.from(wei);
  return ethers.utils.formatEther(weiBN);
}

async function etherToWei(ether) {
    console.log('ether',ether);
  return ethers.utils.parseEther(ether).toString();
}

// Usage example:
// const contractAddress = '0xcB034160f7B45E41E6015ECEA09F31A66C144422';
// const contractAddress = '0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413';
// etherToWei('0.2334')
//     .then(sourceCode => {
//         if (sourceCode) {
//             console.log('Contract Source Code:', sourceCode);
//         } else {
//             console.log('No source code found or error occurred');
//         }
//     });

module.exports = {
  fetchContractSourceCode,
  generateWallet,
  getERC20Balance,
  getNFTsForOwner,
  getUnixTimestamp,
  weiToEther,
  etherToWei,
};
