module.exports = {
    coded : "2019-04-23",
    name : "leftGuild",
    description : "`deleteGuild` event",
    usage : "bot.functions.get('leftGuild').execute(guild)",

    execute(guild){
        try{
            bot = guild.client;

            guild.members.forEach(member => {
                if(member.user.bot){
                  bots++
                } else {
                  users++
                };
            });


            e = new discord.RichEmbed()
            .setTitle(guild.name)
            .setThumbnail(guild.iconURL)
            .setColor("RED")
            .setFooter("Left Guild", bot.user.avatarURL)
            .setDescription(`\`\`\`css\n---==☆ Left Guild ☆==---\`\`\` \`\`\`css\nGuild ID${guild.id}\n\ Members : ${user}\n\ \ \ \ Bots : ${bots}\n\ \ Joined : ${bot.g.get(guild.id).joined}\`\`\``)


            bot.support.shadowServers.forEach(g => {
                bot.channels.get(g.server).send(`I have left __\`${guild.name}\`__ \`(${guild.id})\``)
                .then(bot.channels.get(g.server).send(e));
            });


            fs.unlink(`./Src/System/Settings/Guilds/${guild.id}.json`, (err) => {
                if(err) shadowServers.forEach(g => {
                bot.channels.get(g.server).send(`Failed to delete guild information.\n-> id : ${guild.id}\n\n${err}`)
                });
            });
        } catch (err) {
            bot.functions.get('err').execute(message, err);
        };
    }
}
