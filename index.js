const Telegrambot = require('node-telegram-bot-api')
const Token = '470252940:AAGIsKB71TR4xQyFYnDUHUDAEW_8ij8FKmw'
const debug =require('./helpers.js')
const bot = new Telegrambot(Token, {
    polling: true
});
bot.on('message', (msg) => {
    const chatId = msg.chat.id
   bot.sendMessage(chatId, 'клавиатура', {
       reply_markup: {
           keyboard: [
               ['1','2'],
               ['3']
           ]
       }

   })
})

