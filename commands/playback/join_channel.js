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

class JoinCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'playback',
            memberName: 'join',
            description: 'Joins a voice channel'
        });
    }
    async run(message, args) {
        if (message.member.voiceChannel) {
            console.log('In a voice channel!')
            if (!message.guild.voiceConnection) {
                console.log('In a voice channel!')
                if (!servers[message.guild.id]) {
                    console.log('In a voice channel!')
                    servers[message.guild.id] = {
                        queue: []
                    }
                }
                message.member.voiceChannel.join()
                    .then(connection => {
                        console.log('In a voice channel!')
                        var server = servers[message.guild.id];
                        message.reply(`ErrBot joined ${message.member.voiceChannel.name}`);
                        server.queue.push(args);
                        Play(connection, message);
                    })

            } else {
                message.reply("ErrBot is either already in the channel or can't be summoned!");
            }
        }
    }
}

module.exports = JoinCommand;
