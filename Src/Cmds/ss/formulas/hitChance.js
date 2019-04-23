module.exports = {
    coded : "2019-04-22",
    name : "hitchance",
    description : "Gives a Projection of your HitChance %",
    usage : "<yourSize> <targetSize>",
    args : true,


    execute(message, args){

      if(args.length < 2) return message.reply("Please input your Ship-Size, and your Target-Size.");

      sSize = args.shift();
      tSize = args.shift();

      if(isNaN(sSize)) return message.reply("`Ship-Size` must be a number.");
      if(isNaN(tSize)) return message.reply("`Target-Size` must be a number.");


      let hitChance = 0;
      if(sSize > tSize) {
          hitChance = 50 *tSize /sSize;
      } else if(sSize < tSize){
          hitChance = 100 -(50 *(sSize /tSize));
      } else hitChance = 50;


      message.channel.send(`\`\`\`css\n[Data]\nShip-Size : ${sSize} | Target-Size : ${tSize}\`\`\`\`\`\`css\n[Formula Result]\nHitChance % : ${Math.floor(hitChance)}\`\`\``);

    }
  };
