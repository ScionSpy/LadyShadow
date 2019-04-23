module.exports = {
    coded : "2019-04-23",
    name : "onCheck",
    description : "On Boot, cross-references settings with live, dels oldFiles, makes newFiles.\nUseful when a guild leaves/joins while shadow is offline/crashing.",
    usage : "bot.functions.get('onCheck').execute(type, info)",

    execute(bot){

      //Make UnMade Files
        bot.guilds.forEach(guild => {
            //const file = fs.readFile(`./Src/System/Settings/Guilds/${guild.id}.json`, "utf-8", (err) => err);
            file = bot.g.get(guild.id);
            if(!file) bot.functions.get('newGuild').execute(guild);
        });

        bot.g.forEach(file => {
            let guildSettings = [];

            bot.guilds.some(g => {
                if(g.id == file.id) return;
                guildSettings.push(file);
            });

            if(guildSettings > 0) guildSettings.forEach(settings => {
                bot.functions.get('leftGuild').execute(settings);
            });
        });

    }
}
