const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

function Play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(ytdl(server.queue[0], { filter: "audioonly" }));
    server.queue.shift();
    server.dispatcher.on("end", function () {
        if (server.queue[0]) {
            Play(connection, message);
        } else {
            connection.disconnect();
        }
    });
}

class PlayCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'playback',
            memberName: 'play',
            description: 'Plays the given youtube-url.'
        });
    }
    async run(message, args) {
        if (message.member.voiceChannel) {
            var server = server[message.guild.id];
            message.reply(`ErrBot joined ${message.member.voiceChannel.name}`);
            server.queue.push(args);
            Play(client.guild.connection, message);
        }
    }
}

module.exports = PlayCommand;
