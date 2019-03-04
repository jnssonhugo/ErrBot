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
        var roll = Math.floor(Math.random() * 100) + 1;
        if (roll == 100) {
            message.channel.send(
                'You rolled the perfect ' + roll
            )
        } else if (roll == 0) {
            message.channel.send(
                'What are the odds? You rolled ' + roll
            )
        } else {
            message.channel.send(
                'You rolled: ' + roll + '!'
            )
        }
    }
}
module.exports = Roll;