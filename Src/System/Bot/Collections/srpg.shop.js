//Collection

module.exports = {
  coded : "2019-03-19",

  name : "srpg.shop",
  description : "Logs all of Shadows SRPG Cmds.",


  execute(bot, fs){


    const shopFiles = fs.readdirSync('./Src/System/Srpg/Shop').filter(file => file.endsWith('.json'));

    for (const file of shopFiles) { 	const item = require(`../../.././System/Srpg/Shop/${file}`);
      bot.srpg.shop.set(item.id, item);
    };

  }
};
