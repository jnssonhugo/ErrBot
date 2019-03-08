const commando = require('discord.js-commando');

class WhatIs extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'whatis',
            group: 'fun',
            memberName: 'whatis',
            description: 'Will google your question and paste the answer!'
        });
    }
    async run(message, args) {
        message.channel.send('whatis functionality not yet implemented, zry');
    }
}

module.exports = WhatIs;