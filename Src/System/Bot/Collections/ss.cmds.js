//Collection

module.exports = {
  coded : "2019-03-16",
  
  name : "ss.cmds",
  description : "Collects all SagaSpace commands.",
  
  
  execute(bot, fs){


    const ssFiles = fs.readdirSync('./Src/Cmds/ss').filter(file => file.endsWith('.js'));

    for (const file of ssFiles) { 	const cmd = require(`../../.././Cmds/ss/${file}`);
      bot.ss.cmds.set(cmd.name, cmd);
    };

  }
}