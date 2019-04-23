module.exports = {
    coded : "2019-04-23",
    name : "newGuild",
    description : "Creates a `newGuild settings folder` for the requested guild.",
    usage : "bot.functions.get('newGuild').execute(guild)",

    execute(guild) {
        bot = guild.client;
        fs.writeFileSync(`./Src/System.Settings/Guilds/${guild.id}.json`, bot.defaults["guild"])
    }
}
