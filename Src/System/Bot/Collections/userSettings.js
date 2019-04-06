module.exports = {
    coded : "2019-04-05",
    
    name : "u",
    description : "Grabs userSettings.",
    
    
    execute(bot, fs){
      
  
      const userFiles = fs.readdirSync('./Src/System/Settings/Users').filter(file => file.endsWith('.json'));
  
      for (const file of userFiles) { 	const user = require(`../../.././System/Settings/users/${file}`);
        bot.u.set(user.id, user);
      };
  
    }
  }