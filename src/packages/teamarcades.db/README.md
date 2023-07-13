# teamarcades.db
<a href="https://teamarcades.xyz/dc" target="_blank"><img src="https://discord.com/api/guilds/935157109761388554/widget.png?style=banner2" alt="Join our discord" width="256"></a><br>
**Support:** [https://teamarcades.xyz/dc](https://teamarcades.xyz/dc) <br>
**NPM:** [npmjs.com/package/teamarcades.db](https://www.npmjs.com/package/teamarcades.db)<br>

```js
const Database = require("teamarcades.db");
const db = new Database("./db.json");

db.set('serverStatus', { status: 'Online' })
/*
  "serverStatus": {
    "status": "Online"
  }
*/
db.add("money_K4itrun", 500)
/* 
  "money_K4itrun": 500
*/
db.push("serverSettings", { whitelist: "on", playerCount: "24" })
/*
  "serverSettings": [
      {
        "whitelist": "on",
        "playerCount": "24"
      }
    ]
*/
db.has("money_K4itrun") // true
db.has("money_iK4itrun") // false
db.get("money_K4itrun") // => 500
db.sub("money_K4itrun", 100)// => 400
db.fetch("serverStatus") // => { status: "Online" }
db.get("serverStatus") // => { status: "Online" }
db.delete("serverStatus") // => {}
db.clear() // {}
db.all()
/*
  {
    money_K4itrun: 500,
    serverSettings: [ { whitelist: 'on', playerCount: '24' } ]
  }
*/
```
## Installation
*If you have trouble with the installation, please feel free to visit our [discord](https://teamarcades.xyz/dc) address.*
- `npm i teamarcades.db`
#   t e a m a r c a d e s . d b 
 
 
