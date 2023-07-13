const Discord = require('discord.js');
const botdata = require("../database/models/botlist/bots.js");

module.exports.run = async (client, message, args) => {
   let x = await botdata.find();
   let bots = await x.filter(a => a.ownerID == message.author.id || a.coowners.includes(message.author.id))
   
   const embed = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
   .setDescription(`**Total de Bots, eh encontrado \`${bots.length}\` Bots.**`)
   .setColor("#7289da");
   
   if (bots.length > 0) {
     const botIDs = bots.map(a => "<@"+a.botID+">").join("\n");
     embed.addField("Bots", botIDs, true);
   } else {
     embed.addField("Bots", "Ninguno", true);
   }
   
   message.channel.send(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
};

exports.help = {
    name: "bots",
    description: "Ver la cantidad de bots que se encuentran en la botlist.",
    usage: "bots"
};
