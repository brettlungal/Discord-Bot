const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();



client.on('ready' , () =>{
    console.log('This bot is online');
    
})

client.login(process.env.DISCORD_SECRET_TOKEN)