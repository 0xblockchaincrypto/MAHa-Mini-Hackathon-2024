const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config();

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const userText = msg.text;

    // Your processing logic will go here
    let responseText = processUserInput(userText);
    
    bot.sendMessage(chatId, responseText);
});

function processUserInput(input) {
    // Process input and create response to user
    // This is a placeholder func, replace with your actual functionality
    return `You said: ${input}`;
}
