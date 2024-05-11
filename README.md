# BLOCK QUERY: Blockchain Assistant Bot for Telegram

## Bot URL
Access the Blockchain Assistant Bot directly on Telegram: [t.me/block_query_bot](https://t.me/block_query_bot)

## Overview
The Blockchain Assistant Bot is a unique Telegram bot tailored for interacting with blockchain technologies through natural and intuitive language. It acts both as a conversational companion and an essential toolkit designed for effective management of common blockchain operations. 

## Features

### Conversational Interaction
Users can chat with the bot using plain English, without needing to remember specific commands or syntax. Whether asking for blockchain-related data or seeking help with Ethereum transactions, the user simply types a request as if speaking to another person.

### Cryptocurrency Transaction Capabilities
Through a single message, users can initiate various cryptocurrency transactions:
- **Wallet Generation**: Request the bot to generate a new Ethereum wallet address.
- **Currency Conversion**: Convert values between ether and its smaller denomination, wei, or inquire about the current Unix timestamp to confirm transaction times.

### Blockchain Data Retrieval
Gain instant access to specific blockchain data directly through conversation:
- **NFT Ownership**: Identify which NFTs are held by a particular Ethereum wallet.
- **ERC20 Token Balances**: Check the balance of ERC20 tokens in any specified wallet.
- **Smart Contract Code**: Retrieve and display the source code of any smart contract through its Ethereum address.


## Conversational Examples
- **Generating Ethereum Addresses**: A user might say, "I need a new Ethereum wallet," and the bot will respond with a newly generated wallet address and private key.
- **Fetching Token Data**: When a user asks, "What tokens does this wallet hold?", the bot will list all the ERC20 tokens along with their quantities for the given address.
- **Smart Contract Queries**: Users can request the source code of a contract by asking, "Can you show me the code for this contract address?"



## Technical Information
This project is hosted on GitHub and can be run locally by executing `node index.js` in the terminal. Ensure necessary API keys and bot tokens are provided in the `.env` file for proper functionality.

### GitHub Repository
[Blockchain Assistant Bot GitHub](https://github.com/srv-smn/MAHa-Mini-Hackathon-2024)

### Required API Configurations
- **Alchemy API Key** (`ALCHEMY`)
- **Etherscan API Key** (`ETHERSCAN_API_KEY`)
- **Telegram Bot Token** (`TELEGRAM_TOKEN`)

### Key Dependencies
- `alchemy-sdk`
- `dotenv`
- `ethereumjs-wallet`
- `ethers`
- `node-telegram-bot-api`
- `openai`

