const fetch = require('node-fetch');
const { Alchemy, Network } = require( "alchemy-sdk");
const Wallet = require('ethereumjs-wallet').default;

const config = {
    apiKey: process.env.ALCHEMY,
    network: Network.ETH_MAINNET,
  }

const alchemy = new Alchemy(config);

async function getNFTsForOwner(owner) {
    const endpoint = `https://eth-mainnet.g.alchemy.com/nft/v3/${process.env.ALCHEMY}/getNFTsForOwner?owner=${owner}&pageSize=10`;
    console.log(endpoint);
    const options = {
        method: 'GET',
        headers: { accept: 'application/json' }
    };

    try {
        const response = await fetch(endpoint, options);
        const data = await response.json();
        const nfts = data.ownedNfts;
        const nftDetails = []; // Array to store NFT objects

        for (const nft of nfts) {
            if (nft.contract) {
                nftDetails.push({ // Create an object for each NFT
                    name: nft.name,
                    symbol: nft.contract.symbol,
                    id: nft.tokenId,
                    description: nft.description
                });
            }
        }
        console.log(nftDetails)
        return nftDetails; 

    } catch (error) {
        console.error(error);
    }
}

const getERC20Balance = async (userAddress) => {
  // Wallet address
  const address = userAddress;

  // Get token balances
  const balances = await alchemy.core.getTokenBalances(address);

  // Remove tokens with zero balance
  const nonZeroBalances = balances.tokenBalances.filter((token) => {
    return token.tokenBalance !== "0";
  });

  console.log(`Token balances of ${address} \n`);

  // Counter for SNo of final output
  let i = 1;

  // Loop through all tokens with non-zero balance
  for (let token of nonZeroBalances) {
    // Get balance of token
    let balance = token.tokenBalance;

    // Get metadata of token
    const metadata = await alchemy.core.getTokenMetadata(token.contractAddress);

    // Compute token balance in human-readable format
    balance = balance / Math.pow(10, metadata.decimals);
    balance = balance.toFixed(2);

    // Print name, balance, and symbol of token
    console.log(`${i++}. ${metadata.name}: ${balance} ${metadata.symbol}`);
  }
};

function generateWallet() {
    const wallet = Wallet.generate();
    const privateKey = wallet.getPrivateKeyString();
    const publicKey = wallet.getPublicKeyString();
    const address = wallet.getAddressString();

    console.log('Private Key:', privateKey);
    console.log('Public Key:', publicKey);
    console.log('Address:', address);
}



// const runMain = async () => {
//   try {
//     await main();
//     process.exit(0);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// runMain();
// generateWallet();

// Test function with your owner address
// getNFTsForOwner('0xcB034160f7B45E41E6015ECEA09F31A66C144422');
