const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Sikeresen Csatlakoztam a Discord Szerver-re');
});
var natural_pictures=["https://bit.ly/36d2AvY","https://bit.ly/37gfMPR","https://bit.ly/2VcHJT9"];
var numbers = new Array(2)
function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}
client.on('message', message => {
    if (message.content === `${prefix}ping`) {
        message.channel.send('Sikeresen pingeled a discord szervert (O_O) .');
    } else if (message.content === `${prefix}game`) {
        message.channel.send('Játszunk.');
    } else if (message.content === `${prefix}szerver-info`) {
        message.channel.send(`Szerver név: ${message.guild.name}\nA Jelenlegi Tagok Száma: ${message.guild.memberCount}`);
    } else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Felhasználóneved: ${message.author.username}\nAzonosítód: ${message.author.id}`);
    }
    else if (message.content === `${prefix}kep1`) {
            message.channel.send(`ez egy természetes kép `);
            message.channel.send(`${natural_pictures[randomIntInc(0,2)]}`);
    }
















     else if (message.content === `${prefix}help`) {
        message.channel.send(`\n*Parancsok:*\n ${prefix}user-info\n ${prefix}szerver-info\n ${prefix}ping `);
    }

});

client.login(token);










     else if (message.content === `${prefix}help`) {
        message.channel.send(`\n*Parancsok:*\n ${prefix}user-info\n ${prefix}szerver-info\n ${prefix}ping`);
    }

});

client.login(token);
