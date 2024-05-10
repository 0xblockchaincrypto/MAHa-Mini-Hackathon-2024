const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config();
const analyseQuery = require('./src/openAI/index')

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userText = msg.text;
    console.log('userText',userText)

    // Your processing logic will go here
    let responseText = await analyseQuery(userText);
    
    bot.sendMessage(chatId, responseText);
});


