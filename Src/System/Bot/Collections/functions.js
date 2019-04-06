module.exports = {
    coded : "2019-03-25",
    name : "functions",
    description : "Logs all of the functions used within Shadow.",
    
    execute(bot, fs){


      const funcFiles = fs.readdirSync('./Src/System/Bot/Functions').filter(file => file.endsWith('.js'));
  
      for (const file of funcFiles) { 	const func = require(`../Functions/${file}`);
        bot.functions.set(func.name, func);
      };
      
    }
  };