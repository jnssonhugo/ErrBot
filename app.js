const Discord = require('discord.js-commando');
const settings = require('./settings.json');
const client = new Discord.Client({ commandPrefix: '~' });

global.servers = {};
client.registry.registerGroups(
    [
        ['fun', 'The funny ones'],
        ['playback', 'Playback commands']
    ]
).registerCommandsIn(__dirname + '/commands').registerDefaults();

client.on('ready', () => {
    console.log('ErrBot is ready!');
});

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith('~')) return;
    if (message.content.startsWith('~')) {
        console.log('Acting on command: ' + message.content); return;
    }
});

client.login(settings.token);