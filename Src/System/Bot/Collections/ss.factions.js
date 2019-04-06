//Collection

module.exports = {
  coded : "2019-03-19",
  
  "name" : "ss.factions",
  description : "Known SagaSpace Factions",
  
  
  execute(bot, fs){
    

    const factionFiles = fs.readdirSync('./Src/System/Ss/Factions').filter(file => file.endsWith('.json'));

    for (const file of factionFiles) { 	const faction = require(`../../.././System/Ss/Factions/${file}`);
      bot.ss.factions.set(faction.name2, faction);
    };

  }
}