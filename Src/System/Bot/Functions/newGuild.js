module.exports = {
    coded : "2019-04-23",
    name : "newGuild",
    description : "Creates a `newGuild settings folder` for the requested guild.",
    usage : "bot.functions.get('newGuild').execute(guild)",

    execute(guild) {
        bot = guild.client;
        bot.defaults.execute("newGuild", guild);

        let users = 0;
        let bots = 0;

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
            .setColor("GREEN")
            .setFooter("New Guild", bot.user.avatarURL)
            .setDescription(`\`\`\`css\n---==☆ New Guild ☆==---\`\`\` \`\`\`css\nGuild ID : ${guild.id}\n\ Members : ${users}\n\ \ \ \ Bots : ${bots}\n\ Created : ${guild.createdAt}\`\`\``)


        bot.support.shadowServers.forEach(g => {
            bot.channels.get(g.server).send(e);
        });
    }
}
