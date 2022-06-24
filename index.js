const telebot = require("telebot");
const CONTANTS = require("./constants");
const express = require('express')
const app = express();
//const port = 3000
const bot = new telebot({
    token: CONTANTS.TELEGRAM_TOKEN
    })


    app.get('/', (req, res) => {
      res.send('Hello World!')
    })
    
    .listen(process.env.PORT || 5000)



bot.on(["/start","/hola"], (msg) => {
    bot.sendMessage(msg.chat.id, `Hola ${msg.chat.username}, soy bot hecho por cesar`)
}) 

bot.on(["/hector","/pachanaz", "/panocha"], (msg) => {
    bot.sendMessage(msg.chat.id, `El panocha le da otra vuelta al sol el 25 de enero`)
}) 

bot.on(["/emily","/white"], (msg) => {
    bot.sendMessage(msg.chat.id, `la Señorita white le da otra vuelta al sol el 15 de abirl`)
}) 

bot.on(["/arausi","/roja"], (msg) => {
    bot.sendMessage(msg.chat.id, `la zorra roja le da otra vuelta al sol el 3 de mayo`)
}) 

bot.on(["/jeanny","/jenny","/jeny","/mama"], (msg) => {
    bot.sendMessage(msg.chat.id, `la mama de la mama de la mama del grupo le da otra vuelta al sol el  de mayo`)
}) 

bot.on(["/valen","/valentina", "/callaita"], (msg) => {
    bot.sendMessage(msg.chat.id, `la callaita del grupo le da otra vuelta al sol el 19 de junio`)
}) 

bot.on(["/jonner","/papi"], (msg) => {
    bot.sendMessage(msg.chat.id, `Papi Jonner le da otra vuelta al sol el 7 de septiembre`)
}) 

bot.on(["/arquitecto","/miguel"], (msg) => {
    bot.sendMessage(msg.chat.id, `El arquitecto le da otra vuelta al sol el 8 de noviembre`)
}) 

bot.on(["/patacon","/fiorella"], (msg) => {
    bot.sendMessage(msg.chat.id, `El patacon italiano le da otra vuelta al sol el 12 de noviembre`)
}) 

bot.on(["/angel"], (msg) => {
    bot.sendMessage(msg.chat.id, `Angel niño le da otra vuelta al sol el 10 de diciembre`)
}) 

bot.on(["/jelmary", "/jelly"], (msg) => {
    bot.sendMessage(msg.chat.id, `Jelly le da otra vuelta al sol el 19 de diciembre`)
}) 

bot.on(["/hetere","/sagitario", "/cesar", "/elonmusk"], (msg) => {
    bot.sendMessage(msg.chat.id, `Hetere Sagitario A.K.A Elon Musk le da otra vuelta al sol el 20 de diciembre`)
}) 

bot.on(["/isabela", "/isabella","/lesbica", "/lesbianicon"], (msg) => {
    bot.sendMessage(msg.chat.id, `Lesbica futurista le da otra vuelta al sol el 28 de diciembre`)
}) 



bot.start();