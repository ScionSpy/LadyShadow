module.exports = {
  coded : "2019-03-16",
  
  name : "cmds",
  description : "Logs all of Shadows Main Cmds.",
  
  
  execute(bot, fs){
    const cmdFiles = fs.readdirSync('./Src/Cmds').filter(file => file.endsWith('.js'));

    for (const file of cmdFiles) { 	const cmd = require(`../../.././Cmds/${file}`);
      bot.cmds.set(cmd.name, cmd);
    };
    
  }
};