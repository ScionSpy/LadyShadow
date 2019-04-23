module.exports = {
  coded : "2019-02-25",

  name : "ping",
  description : "pingPong.",
  cooldown : 5,


  execute (message, args){
    bot = message.client;
    settings = bot.g.get(message.guild.id);

    e = new discord.RichEmbed()
      .setTitle("Pong!!")
      .setColor(settings.color)

    message.channel.send("Pinging...")
      .then(msg => {
        e.setDescription(`\`\`\`css\nBot : ${msg.createdTimestamp - message.createdTimestamp}ms\nAPI : ${Math.round(bot.ping)}ms\`\`\``);
        msg.edit(e);
      });
  },
};
