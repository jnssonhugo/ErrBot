const commando = require('discord.js-commando');

class CoinFlip extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'fun',
            memberName: 'flip',
            description: 'Will flip a coin!'
        });
    }
    async run(message, args) {
        if (Math.floor(Math.random() * 2) == 0) {
            message.channel.send('Heads!');
        } else {
            message.channel.send('Tails!');
        }
    }
}
    module.exports = CoinFlip;
