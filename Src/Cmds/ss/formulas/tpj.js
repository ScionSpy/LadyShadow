discord = require('discord.js');

module.exports = {
  coded : "2019-03-16",

  name : "tpj",
  description : "Collects vessel SIZ and THR data and provides a Turn Per Jump projection.",
  usage : "<shipSize> <thrPower>",

  args : true,


  execute(message, args){

    if(args.length < 2) return message.reply("Please input your Ship-Size, and Ship-THR.");

    size = args.shift();
    thrOP = args.shift();

    if(isNaN(size)) return message.reply("`size` must be a number.");
    if(isNaN(thrOP)) return message.reply("`THR` must be a number.");

    thr = size * 15 / thrOP;

    e = new discord.RichEmbed()
      .setTitle("SagaSpace - Turns Per Jump")
      .setColor("00ffff")
      .setDescription(`\`\`\`css\n[Data]\nSize : ${size} | THR : ${thrOP}\`\`\`\`\`\`css\n[Formula Result]\nTPJ : ${Math.floor(thr)}\`\`\``);

    message.channel.send(e);
  }
};
