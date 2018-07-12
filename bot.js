const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'info') {
    	message.reply('Welcome to Hydrine Corporation! We are a developer coding company. Please contact hydrinecorporation@gmail.com if you need help.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
