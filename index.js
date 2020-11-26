const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Sikeresen Csatlakoztam a Discord Szerver-re');
});

client.on('message', message => {
    if (message.content === `${prefix}ping`) {
        message.channel.send('Sikeresen pingeled a discord szervert (O_O) .');
    } else if (message.content === `${prefix}game`) {
        message.channel.send('Játszunk.');
    } else if (message.content === `${prefix}szerver-info`) {
        message.channel.send(`Szerver név: ${message.guild.name}\nA Jelenlegi Tagok Száma: ${message.guild.memberCount}`);
    } else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Felhasználóneved: ${message.author.username}\nAzonosítód: ${message.author.id}`);
    }else if (message.content === `${prefix}kep1`) {
        message.channel.send(`ez egy kép `);
        message.channel.send(`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lokeshdhakar.com%2Fprojects%2Flightbox2%2Fimages%2Fimage-4.jpg&f=1&nofb=1`);
    }

else if (message.content === `${prefix}kep2`) {
        message.channel.send(`ez egy másik kép `);
        message.channel.send(`https://www.thewowstyle.com/wp-content/uploads/2015/07/autunm-desktop-natural-hd-wallpapers-1024x640.jpg`);
    }

















     else if (message.content === `${prefix}help`) {
        message.channel.send(`\n*Parancsok:*\n ${prefix}user-info\n ${prefix}szerver-info\n ${prefix}ping`);
    }

});

client.login(token);
