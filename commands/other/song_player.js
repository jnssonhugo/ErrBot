const commando = require('discord.js-commando');

class SongPlayer extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'other',
            memberName: 'play',
            description: 'Will play a song'
        });
    }
    async run(message, args) {
        message.channel.send('Playing functionality not yet supported');
    }
}
module.exports = SongPlayer;