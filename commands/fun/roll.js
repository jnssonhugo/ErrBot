const commando = require('discord.js-commando');

class Roll extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'fun',
            memberName: 'roll',
            description: 'Will roll any number between 1-100, wow-esque!'
        });
    }
    async run(message, args) {
        var nr = message.content.substring(5);
        if (nr > 0) {
            message.channel.send('Don\'t you try to fool me!');
            return;
        }

        var roll = Math.floor(Math.random() * 100) + 1;
        if (roll == 100) {
            message.channel.send(
                `Waow! You rolled ${roll}`
            )
        } else if (roll == 0) {
            message.channel.send(
                `Loser! You rolled: ${roll}`
            )
        } else {
            message.channel.send(
                `You rolled: ${roll}`
            )
        }
    }
}
module.exports = Roll;