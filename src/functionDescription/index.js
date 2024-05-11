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
          description: "Ethereum address of the NFT owner.",
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
          description: "Ethereum address of the user.",
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
          description:
            "Ethereum address of the smart contract whose source code is to be retrieved.",
        },
      },
      required: ["account_address"],
    },
  },
  {
    name: "getUnixTimestamp",
    description: "Retrieves the current Unix timestamp in seconds.",
    parameters: {
      type: "object",
      properties: {},
      required: [],
    },
  },
  {
    name: "weiToEther",
    description:
      "Converts a value from wei (the smallest unit of ether) to ether.",
    parameters: {
      type: "object",
      properties: {
        wei: {
          type: "string",
          description: "The amount in wei to convert to ether.",
        },
      },
      required: ["wei"],
    },
  },
  {
    name: "etherToWei",
    description:
      "Converts a value from ether to wei (the smallest unit of ether).",
    parameters: {
      type: "object",
      properties: {
        ether: {
          type: "string",
          description: "The amount in ether to convert to wei.",
        },
      },
      required: ["ether"],
    },
  },
];

module.exports = functionDescriptions;
