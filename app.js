const Discord = require('discord.js-commando');
const settings = require('./settings.json');
const client = new Discord.Client({
    commandPrefix: '~'
});

client.registry.registerGroup('simple','Simple');
client.registry.registerGroup('hard','Hard')
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname+ '/commands');

client.on('ready', () => {
    console.log('Am rdy');
})

client.on('message', message => {
    if (!message.content.startsWith('~')) return;
    if (message.author.bot) return;

})

client.login(settings.token);