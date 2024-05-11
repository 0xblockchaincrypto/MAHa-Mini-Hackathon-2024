# BLOCK QUERY: LLM Powered Blockchain Assistant Bot for Telegram

## Bot URL
Access the Blockchain Assistant Bot directly on Telegram: [t.me/block_query_bot](https://t.me/block_query_bot)

## Overview
The Blockchain Assistant Bot is a unique Telegram bot tailored for interacting with blockchain technologies through natural and intuitive language. It acts both as a conversational companion and an essential toolkit designed for effective management of common blockchain operations. 

## Sample Conversation
### Ask questions about any Smart Contract. Just provide the address and it will fetch the contract and answer your query.
<img src="https://github.com/srv-smn/MAHa-Mini-Hackathon-2024/assets/47235134/7cc2927b-91f6-49f1-92e7-c62699005b66" width="360" height="606">

<img src="https://github.com/srv-smn/MAHa-Mini-Hackathon-2024/assets/47235134/c3ada771-1c6b-46a7-8f29-73155aeaa592" width="360" height="606">

### Utility functions like Generating New Accounts, Unit conversion, Unix Time stamp
<img src="https://github.com/srv-smn/MAHa-Mini-Hackathon-2024/assets/47235134/a9882e05-6544-46d7-8230-0a7f9c622e4b" width="360" height="606">

<img src="https://github.com/srv-smn/MAHa-Mini-Hackathon-2024/assets/47235134/206de0f5-76a5-41f9-8fdc-cfceb7cb32be" width="360" height="606">

### Ask about the balances of NFT and ERC20s
<img src="https://github.com/srv-smn/MAHa-Mini-Hackathon-2024/assets/47235134/0af88c11-1e8e-460f-9697-8f5be53cf1dc" width="360" height="606">



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

