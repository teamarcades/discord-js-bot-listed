const Discord = require('discord.js');
const fetch = require("node-fetch");
exports.run = (client, message, args) => {
    if(!global.config.bot.owners.includes(message.author.id)) return  message.reply('no se pudo otorgar permiso de acceso.')
	message.channel.send("Tema: Reiniciar el bot.").then(msg => {
		console.log(`BOT: reiniciando...`);
		process.exit(1);
	})
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: []
};
exports.help = {
	name: 'reboot',
	description: 'Reinicia el bot.',
	usage: 'reboot'
};