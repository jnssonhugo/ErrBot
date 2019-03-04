const Discord = require('discord.js-commando');
const settings = require('./settings.json');
const client = new Discord.Client({
    commandPrefix: '~'
});
client.registry.registerGroups([
    ['fun', 'The funny ones'],
    ['other', 'Other stuff']
])
.registerCommandsIn(__dirname + '/commands')
.registerDefaults();


client.on('ready', () => {
    console.log('Am rdy');
});

client.on('message', message => {
    if (!message.content.startsWith('~')) return;
    if (message.author.bot) return;
});

client.login(settings.token);