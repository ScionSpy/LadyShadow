//Collection

module.exports = {
    coded : "2019-04-02",
    
    name : "srpg.functions",
    description : "Collects all Shadow.RPG functions.",
    
    
    execute(bot, fs){
  
  
      const srpgFiles = fs.readdirSync('./Src/System/Srpg/System/Functions').filter(file => file.endsWith('.js'));
  
      for (const file of srpgFiles) { 	const func = require(`../../.././System/Srpg/System/Functions/${file}`);
        bot.srpg.functions.set(func.name, func);
      };
  
    }
  }