module.exports = {
  coded : "2019-03-16",
  
  name : "g",
  description : "Grabs serverSettings.",
  
  
  execute(bot, fs){
    

    const guildFiles = fs.readdirSync('./Src/System/Settings/Guilds').filter(file => file.endsWith('.json'));

    for (const file of guildFiles) { 	const guild = require(`../../.././System/Settings/Guilds/${file}`);
      bot.g.set(guild.id, guild);
    };

  }
}