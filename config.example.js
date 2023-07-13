module.exports = {
    bot: {
        token: "",
        prefix: "",
        owners: [],
        mongourl: "" //https://mongodb.com/cloud/atlas/register
    },

    website: { //https://i.hizliresim.com/2sdunq.png
        port: process.env.PORT || 3000,
        callback: "URL/callback",
        secret: "",
        clientID: "",
        tags: [
            "Moderation",
            "Fun",
            "Minecraft",
            "Economy",
            "Guard",
            "NSFW",
            "Anime",
            "Invite",
            "Music",
            "Logging",
            "Web Dashboard",
            "Reddit",
            "Youtube",
            "Twitch",
            "Crypto",
            "Leveling",
            "Game",
            "Roleplay",
            "Utility",
            "Turkish"
        ]    
    },

    server: {
        id: "",
        roles: {
            owner: "",
            moderator: "",
            profile: {
                booster: "",
                sponsor: "",
                supporter: "",
                partnerRole: "" 
            },
            codeshare: {
                javascript: "",
                html: "",
                altyapilar: "",
                bdfd: "",
                besdavet: "",
                ondavet: "",
                onbesdavet: "",
                yirmidavet: ""
            },
            botlist: {
                developer: "",
                certified_developer: "",
                bot: "",
                certified_bot: ""
            }
        },
        channels: {
            codelog: "",
            login: "",
            webstatus: "",
            uptimelog: "",
            botlog: "",
            votes: ""
        }
    }
}
