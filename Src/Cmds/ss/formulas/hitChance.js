discord = require('discord.js');

module.exports = {
    coded : "2019-04-22",
    name : "hitchance",
    description : "Gives a Projection of your HitChance %",
    usage : "<yourSize> <targetSize> [ACC] ",
    args : true,


    execute(message, args){

      if(args.length < 2) return message.reply("Please input your Ship-Size, your Target's-Size and your ACC *(if none leave blank)*.");

      let sSize = args.shift();
      let tSize = args.shift();
      let ACC = 0;
      if(args.length > 2) ACC = args.shift();

      if(isNaN(sSize)) return message.reply("`Ship-Size` must be a number.");
      if(isNaN(tSize)) return message.reply("`Target-Size` must be a number.");
      if(isNaN(ACC)) return message.reply("`ACC` must be a number.");

      tSize = tSize + ACC;

      let hitChance = 0;
      if(sSize > tSize) {
          hitChance = 50 * (tSize / sSize);
      } else if(sSize < tSize){
          hitChance = 100 + (50 * (sSize / tSize));
      } else hitChance = 50;

      e = new discord.RichEmbed()
        .setTitle("SagaSpace - HitChance%")
        .setColor("00ffff")
        .setDescription(`\`\`\`css\n[Data]\nShip-Size : ${sSize} | Target-Size : ${tSize}\`\`\`\`\`\`css\n[Formula Result]\nHitChance % : ${Math.round(hitChance)}\`\`\``);

        message.channel.send(e);
    }
  };
