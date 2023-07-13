# teamarcades.botlist
<a href="https://teamarcades.xyz/dc" target="_blank"><img src="https://discord.com/api/guilds/935157109761388554/widget.png?style=banner2" alt="Join our discord" width="256"></a><br>
**Support:** [https://teamarcades.xyz/dc](https://teamarcades.xyz/dc) <br>
**NPM:** [npmjs.com/package/teamarcades.botlist](https://www.npmjs.com/package/teamarcades.botlist)<br>

## Installation
*If you have trouble with the installation, please feel free to visit our [discord](https://teamarcades.xyz/dc) address.*
- `npm i teamarcades.botlist`

```js
const botList = require("teamarcades.botlist");
const Discord = require("discord.js");

const client = new Discord.Client({
    intents: ["GUILDS"]
});

const dbl = new botList("BOTLIST-TOKEN-HERE", client); // => 
// Find your access token at: https://botlist.teamarcades.xyz/bot/{ID-OF-YOUR-BOT}
// And you look on the right side of the page you will find a section called token

const x = { "TOKEN": "DISCORD-BOT-TOKEN-HERE" }

client.on("ready", async () => {
  dbl.serverCount(); // => Note: Only discord.js.
  // console.log("Server count posted")
  
  let hasVote = await dbl.hasVoted("USER-ID"); // => 
  // Adding your ID with that you will know when you have voted and when you have not.
  if(hasVote === true) {
    console.log("Voted")
  } else {
    console.log("Vote please.")
  }
  
   
    let search = await dbl.search("1117102586781257768")
    console.log(search)

    // => This is the similar information you will see when you do a search for a bot from the botlist

    /*
    console.log({
        "avatar": "https://cdn.discordapp.com/avatars/1117102586781257768/048630901d939670be8eee7ae4c1f31e.webp",
        "botID": "1117102586781257768",
        "username": "Apoll.",
        "discrim": "1842",
        "shortDesc": "Multifunctional Discord bot with many features that can fully work with your server.",
        "prefix": "/",
        "votes": 1,
        "ownerID": "681196037381292067",
        "coowners": [
            "1088554690268119103"
        ],
        "tags": [
            "Moderation",
            "Fun",
            "Economy",
            "Guard",
            "NSFW",
            "Invite",
            "Music",
            "Logging",
            "Web Dashboard",
            "Leveling",
            "Utility"
        ],
        "longDesc": "# ApollBot\r\n\r\n## Features\r\n- Automod\r\n- Music\r\n- Mod\r\n- Loggin\r\n- Economy Setup ShopRoles\r\n- Economy normal\r\n- NSFW\r\n- Levels Setup\r\n- Setups\r\n- Helper\r\n- Fun\r\n- Developers\r\n- Welcome and leave\r\n- Reaction Roles\r\n- Fun images\r\n- Manager server\r\n- Dashboard Panel\r\n- Slash Commands\r\n- +400 Sub Slash Commands\r\n- +30 Categorys\r\n- Tickets\r\n- AutoRoles\r\n- Channel Counter\r\n- Channel Audit-Log\r\n- Server STATS\r\n- Support 24/7\r\n- Radio 24/7\r\n- Multi Lenguages\r\n- Setup Music\r\n- Setup Server\r\n- Discord Bot Verification Captcha\r\n- Anti Raid\r\n- Security\r\n- And more...\r\n\r\n# Description\r\n*Bot de discord multifuncional con muchas caracteristicas que puede funcionar completamente con tu servidor.*\r\n\r\n> With ApollBot, turn your server into the favorite place of many with all the immensity of commands and categories that are entertaining and interactive in every way, also with all the amount of FREE configuration without paying\r\n\r\n# Information & Support\r\n- Support: https://apollbot.teamarcades.xyz/dc\r\n- Web: https://apollbot.teamarcades.xyz/\r\n- Dev: https://teamarcades.xyz/\r\n- Team: https://apollbot.teamarcades.xyz/dc\r\n",
        "certificate": "None",
        "support": "https://apollbot.teamarcades.xyz/dc",
        "website": "https://apollbot.teamarcades.xyz"
    })
  */
});

client.login(x.TOKEN)
```

