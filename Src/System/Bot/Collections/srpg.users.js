//Collection

module.exports = {
  coded : "2019-03-19",
  
  name : "srpg.users",
  description : "Logs all of Shadows SRPG Users.",
  
  
  execute(bot,  fs){
    

    const userFiles = fs.readdirSync('./Src/System/Srpg/Users').filter(file => file.endsWith('.json'));

    for (const file of userFiles) { 	const user = require(`../../.././System/Srpg/Users/${file}`);
      bot.srpg.users.set(user.id, user);
    };
    
  }
};