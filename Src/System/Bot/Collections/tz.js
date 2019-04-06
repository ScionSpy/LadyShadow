module.exports = {
    coded : "2019-04-05",
    name : "tz",
    description : "Logs all of the TimeZones accross the world.",
    
    execute(bot, fs){


      const tzFiles = fs.readdirSync('./Src/System/TimeZones').filter(file => file.endsWith('.json'));
  
      for (const file of tzFiles) { 	const tz = require(`../.././TimeZones/${file}`);
        bot.tz.set(tz.abbr, tz);
      };
      
    }
  };