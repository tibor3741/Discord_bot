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
	}else if (message.content === `${prefix}kep`) {
		message.channel.send(`ez egy kép `);
		message.channel.send(`http://tibor.atw.hu/imgs/character.jpg`);
	}


















	 else if (message.content === `${prefix}help`) {
		message.channel.send(`\n*Parancsok:*\n ${prefix}user-info\n ${prefix}szerver-info\n ${prefix}ping`);
	}

});

client.login(token);
