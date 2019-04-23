discord = require('discord.js');
fs = require('fs');

module.exports = {
    coded : "2019-04-19",
    name : "suggest",
    aliases : ["suggestion", "suggestions"],
    args : true,
    srpgUser : true,

    execute(message, args) {
        bot = message.client;
        ch = bot.channels.get('558105957884887045');

      //Edit S.RPG Suggestion count
      //Use "suggestion" when calling the 'Suggetion.Case'
        config = require('../.././System/Srpg/System/Settings/config.json');
        suggestion = config.suggestion + 1;

        const e = new discord.RichEmbed()
          .setTitle(`Suggestion #${suggestion}`)
          .setAuthor(`${message.author.tag} (${message.author.id})\n${bot.srpg.users.get(message.author.id).name} | House : ${bot.srpg.users.get(message.author.id).misc.house.name}`, message.author.avatarURL)
          .setFooter(`Posted : ${bot.functions.get('date').execute(Date.now())}`)
          .setColor('00ffff')
          .setDescription(args.join(' '))

        ch.send(e);

        config.suggestion = suggestion;
        json = JSON.stringify(config);
        fs.writeFileSync(`./Src/System/Srpg/System/Settings/config.json`, json);
    }
}
