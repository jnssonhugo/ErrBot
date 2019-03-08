const commando = require('discord.js-commando');

class LeaveCommand extends commando.Command {

    constructor(client) {
        super(client, {
            name: 'leave',
            group: 'playback',
            memberName: 'leave',
            description: 'Joins a voice channel'
        });
    }
    async run(message, args) {
        if (message.guild.voiceConnection) {
            message.guild.voiceConnection.disconnect();
            message.reply(`ErrBot left ${message.member.voiceChannel.name}`)
        }
        else {
            message.reply('ErrBot can\'t leave where he\'s never been!');
        }
    }
}

module.exports = LeaveCommand;
