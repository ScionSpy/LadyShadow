const discord = require('discord.js');

module.exports = {
  coded : "2019-03-06",

  name : "invite",
  aliases : ["inv"],
  description : "Provides bot links.",
  usage : "",

  cooldown : 4,


  execute(message, args){
    bot = message.client;

    e = new discord.RichEmbed()
      .setTitle("Invite")
      .setAuthor(bot.user.tag)
      .setThumbnail(bot.user.avatarURL)
      .setColor("00ffff")
      .setDescription("[Bot](https://discordapp.com/oauth2/authorize?client_id=347872963636494337&scope=bot&permissions=470150359)\n[Support](https://discord.gg/9FUpBPQ)")
      .setFooter(bot.functions.get("date").execute(Date.now()))


    message.channel.send(e);
  },
};
