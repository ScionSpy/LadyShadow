//Collection

module.exports = {
    coded : "2019-03-20",
    
    name : "srpg.cmds",
    description : "Collects all Shadow.RPG commands.",
    
    
    execute(bot, fs){
  
  
      const srpgFiles = fs.readdirSync('./Src/Cmds/srpg').filter(file => file.endsWith('.js'));
  
      for (const file of srpgFiles) { 	const cmd = require(`../../.././Cmds/srpg/${file}`);
        bot.srpg.cmds.set(cmd.name, cmd);
      };
  
    }
  }