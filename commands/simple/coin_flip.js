const commando = require('discord.js-commando');

class CoinFlip extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Will flip a coin'
        });
    }
    async run(message, args) {
        var flip = Math.floor(Math.random() * 2)
        if (flip == 0) {
            message.channel.send('You landed Heads!');
        }
        if (flip == 1) {
            message.channel.send('You landed Tails!');
        }
    }
}

module.exports = CoinFlip;