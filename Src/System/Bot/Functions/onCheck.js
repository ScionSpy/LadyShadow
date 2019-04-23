module.exports = {
    coded : "2019-04-23",
    name : "onCheck",
    description : "On Boot, cross-references settings with live, dels oldFiles, makes newFiles.\nUseful when a guild leaves/joins while shadow is offline/crashing.",
    usage : "bot.functions.get('onCheck').execute(type, info)",

    execute(bot){

      //Make UnMade Files
        bot.guilds.forEach(guild => {
            const file = fs.readFile(`.././Settings/Guilds/${guild.id}.json`, "utf-8", (err) => err);
            if(!file) bot.defaults.execute("newGuild", guild);
        });

        bot.g.forEach(file => {
            let guildSettings = [];

            bot.guilds.some(g => {
                if(g.id == file.id) return;
                guildSettings.push(file);
            });

            if(guildSettings > 0) guildSettings.forEach(setting => fs.unlink(`./Src/System/Settings/Guilds/${file.id}.json`, (err) => err))
        });

    }
}
