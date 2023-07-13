const fs = require("fs");
const err = 'Error: If you need help? https://teamarcades.xyz/dc'

module.exports = class TEAMARCADES {
    constructor(filePath) {
        this.json = filePath || "./teamarcadesdb.json";
        this.db = {};
        if(!fs.existsSync(this.json)) {
            fs.writeFileSync(this.json, "{}", "utf-8");
        } else {
            this.file();
        }
    } // Team Arcades Development
    
    file() {
        const savedData = JSON.parse(fs.readFileSync(this.json));
        if(typeof savedData === "object") {
            this.db = savedData;
        }
    } // Team Arcades Development

    save() {
        return fs.writeFileSync(this.json, JSON.stringify(this.db, null, 2), "utf-8");
    } // Team Arcades Development

    get(key) {
        if(!key) return console.error(err)
        return this.db[key];
    } // Team Arcades Development

    fetch(key) {
        if(!key) return console.error(err)
        return this.db[key];
    } // Team Arcades Development

    has(key) {
        if(!key) return console.error(err)
        return Boolean(this.db[key]);
    } // Team Arcades Development

    set(key, value) { 
        if(!key) return console.error(err)
        if(!value) return console.error(err)
        this.db[key] = value;
        return this.save();
    } // Team Arcades Development

    delete(key) {
        if(!key) return console.error(err)
        delete this.db[key];
        return this.save();
    } // Team Arcades Development

    add(key, count) {
        if(!key) return console.error(err)
        if(!count) return console.error(err)
        if(!this.db[key]) this.db[key] = 0;
        this.db[key] += count;
        return this.save();
    } // Team Arcades Development

    sub(key, count) {
        if(!key) return console.error(err)
        if(!count) return console.error(err)
        if(!this.db[key]) this.db[key] = 0;
        this.db[key] -= count;
        return this.save();
    } // Team Arcades Development

    push(key, element) {
        if(!key) return console.error(err)
        if(!element) return console.error(err)
        if (!this.db[key]) this.db[key] = [];
        this.db[key].push(element);
        return this.save();
    } // Team Arcades Development

    clear() {
        this.db = {};
        this.save();
    } // Team Arcades Development

    all() {
        return this.db
    } // Team Arcades Development
};