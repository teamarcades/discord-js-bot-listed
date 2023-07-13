const Discord = require('discord.js');
const client = new Discord.Client();
const bots = require("../database/models/botlist/bots.js");
module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send("Error: escriba la ID del bot.");
    let b = await bots.findOne({
        botID: args[0]
    });
    if (!b) return message.channel.send("ID de bot no válida.")
    let website = b.website ? " | [Sitio web](" + b.website + ")" : "";
    let github = b.github ? " | [Github](" + b.github + ")" : "";
    let discord = b.support ? " | [Servidor de soporte](" + b.support + ")" : "";
    let coowner;
    if (!b.coowners.length <= 0) {
        coowner = b.coowners.map(a => "<@" + a + ">").join("\n");
    } else {
        coowner = "";
    }
    const embed = new Discord.MessageEmbed()
        .setThumbnail(b.avatar)
        .setAuthor(b.username + "#" + b.discrim, b.avatar)
        .setDescription("**[Vota por " + b.username + "#" + b.discrim + " presionando aqui.](https://botlist.teamarcades.xyz/bot/" + b.botID + "/vote)**")
        .addField("ID", b.botID, true)
        .addField("Nombre de usuario", b.username, true)
        .addField("Discriminador", b.discrim, true)
        .addField("Votos", b.votes, true)
        .addField("Certificado", b.certificate, true)
        .addField("Breve descripción", b.shortDesc, true)
        .setColor("#7289da")
        .addField("Recuento de servidores", `${b.serverCount || "N/A"}`, true)
        .addField("Owner(s)", `<@${b.ownerID}>\n${coowner.replace("<@>", "")}`, true)
        .addField("Links", `[Invitacion](https://discord.com/oauth2/authorize?client_id=${b.botID}&scope=bot&permissions=8)${website}${discord}${github}`, true)
    message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
};

exports.help = {
    name: "bot-info",
    description: "Ver informacion de un bot",
    usage: "bot-info ID"
};
