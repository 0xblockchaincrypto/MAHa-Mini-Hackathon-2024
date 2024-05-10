const functionDescriptions = [
    {
      name: "getNFTsForOwner",
      description:
        "Fetches a list of NFTs owned by a specified Ethereum address.",
      parameters: {
        type: "object",
        properties: {
          account_address: {
            type: "string",
            description: "Ethereum address of the NFT owner."
          },
        },
        required: ["account_address"],
      },
    },
    {
      name: "getERC20Balance",
      description:
        "Retrieves the balance of ERC20 tokens for a given Ethereum address.",
      parameters: {
        type: "object",
        properties: {
            account_address: {
            type: "string",
            description: "Ethereum address of the user."
          },
        },
        required: ["account_address"],
      },
    },
    {
      name: "generateWallet",
      description:
        "Generates a new Ethereum wallet, including both its private key and address.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
    {
      name: "fetchContractSourceCode",
      description:
        "Fetches the source code of a smart contract from the Ethereum blockchain using its address.",
      parameters: {
        type: "object",
        properties: {
            account_address: {
            type: "string",
            description: "Ethereum address of the smart contract whose source code is to be retrieved."
          },
        },
        required: ["account_address"],
      },
    }
  ];
  

  module.exports = functionDescriptions