const config = require("../../config.js");
const mongoose = require("mongoose")

module.exports = async (client) => {
    mongoose.connect(config.bot.mongourl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false
    }).then(() => {
    console.log("(!) Mongose conectado con éxito.");
    }).catch(a => console.log("(!) Ocurrió un error al conectar Mongoose."));
}