
# teamarcades.nsfw
<a href="https://teamarcades.xyz/dc" target="_blank"><img src="https://discord.com/api/guilds/935157109761388554/widget.png?style=banner2" alt="Join our discord" width="256"></a><br>
**Support:** [https://teamarcades.xyz/dc](https://teamarcades.xyz/dc) <br>
**NPM:** [npmjs.com/package/teamarcades.nsfw](https://www.npmjs.com/package/teamarcades.nsfw)<br>
**It is not only used for discord.js, it can work wherever javascript is used.**


## Example
```js
const v = require("teamarcades.nsfw");

console.log(await v.ping()) // NSFW image send ping.

console.log(await v.hentai()) // Hentai image/png-gif

console.log(await v.pussy()) // Pussy image/png-gif

console.log(await v.pgif()) // Porngraphy image/gif

console.log(await v.four()) // 4k image/png-gif

// All types;
/* 
  hentai, 
  pussy, 
  pgif, 
  four, 
  hneko, 
  neko, 
  anal, 
  hanal, 
  thigh, 
  boobs, 
  ass, 
  kanna, 
  hthigh, 
  tentacle,
  hboobs, 
  holo,
  hass, 
  yaoi, 
  hkitsune, 
  kemonomimi
*/

// Note: await and () must be present.
```

## Simple discord.js@13.5.0 Command;
```js
const v = require('teamarcades.nsfw')
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if(message.channel.nsfw == true) {
    message.channel.send({
      embeds: [
        new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(await v.hentai())
      ]
    })
  } else {
    message.channel.send({
      embeds: [
        new Discord.MessageEmbed()
        .setTitle("ERROR")
        .setColor("RED")
        .setDescription("This channel nsfw content is off, please try again after turning it on.")
        .setImage("https://img.png")
      ]
    })
  }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

module.exports.help = {
  name: 'hentai',
  description: '',
  usage: '' 
};
```

## Simple discord.js@14.9.0 Command;
```js
const v = require('teamarcades.nsfw')
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if(message.channel.nsfw == true) {
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
        .setColor("RANDOM")
        .setImage(await v.hentai())
      ]
    })
  } else {
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
        .setTitle("ERROR")
        .setColor("RED")
        .setDescription("This channel nsfw content is off, please try again after turning it on.")
        .setImage("https://img.png")
      ]
    })
  }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

module.exports.help = {
  name: 'hentai',
  description: '',
  usage: '' 
};

```

## Installation
*If you have trouble with the installation, please feel free to visit our [discord](https://teamarcades.xyz/dc) address.*
- `npm i teamarcades.nsfw`
#   t e a m a r c a d e s . n s f w