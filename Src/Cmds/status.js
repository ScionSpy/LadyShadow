const discord = require('discord.js');

module.exports = {
  coded : "2019-03-01",

  name : "status",
  description : "provides information regarding Shadow.",


  execute(message){
    const bot = message.client;
    e = new discord.RichEmbed();
    /*
      Name
      ID
      Guilds
      Members
    */


   bot.startup = `LadyShadow : {\n\ \ bot : {\n\ \ \ \ \ \ "Alpha" : "${bot.alpha}",\n\ \ \ \ \ "Guilds" : "${bot.guilds.size}",\n\ \ \ \ \ \ "Users" : "${bot.users.size}",\n\ \ \ \ \ \ \ "Cmds" : "${bot.cmds.size}",\n\ \ "Srpg.Cmds" : "${bot.srpg.cmds.size}"\n\ \ },\n\ \ "Start" : "${bot.functions.get('date').execute(bot.readyTimestamp)}"\n}`;


   let users = 0;
   let bots = 0;

   bot.users.forEach(user => {
     if(user.bot){
       bots++
     } else {
       users++
     };
   });

   dV = require('../.././node_modules/discord.js/package.json').version;
   sV = require('../.././package.json').version;
   rV = require('.././System/Srpg/System/Settings/package.json').version;

   e.setTitle(`${bot.user.tag}'s`)
   e.setThumbnail(`${bot.user.avatarURL}'s`)
   e.setColor("00ffff")
   e.addField("Info",`\`\`\`css\nGuilds : ${bot.guilds.size}\n\ Users : ${users}\n\ \ Bots : ${bots}\`\`\``, true)
   e.addField("Commands", `\`\`\`css\n\ Main : ${bot.cmds.size}\nS.RPG : ${bot.srpg.cmds.size}\`\`\``, true)
   e.addField("Versions", `\`\`\`css\nDiscord.js : ${dV}\n\ \ \ \ Shadow : ${sV}a\n\ ShadowRPG : ${rV}a\`\`\``, true)
   e.addField("Support", `\`\`\`css\n\ Owners : ${bot.owners.length}\nSupport : ${bot.support.users.length}\`\`\``, true)
   e.addField("Shadow RPG", `\`\`\`css\n\ \ \ Users : ${bot.srpg.users.size - 2}\n\ \ Houses : 0\nFactions : 0\`\`\``, true)


   message.channel.send(`.`)
   .then(msg => {
     msg.edit(`-`)
     ping = (`(${msg.createdTimestamp - message.createdTimestamp}ms)`);
     e.setFooter(`Pinging@${ping}\nAPI@(${bot.ping}ms)`)
     msg.delete();
     message.channel.send(e);
   });
  },
};
