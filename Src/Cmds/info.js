const d = require('discord.js');

module.exports = {
  coded : "2019-03-01",
  
  name : "info",
  description : "provides information regarding Shadow.",
  
  
  execute(message){
    const b = message.client;
    
    /*
      Name
      ID
      Guilds
      Members
    */
    
    
    let msg = bot.startup;
    
    
    const e = new d.RichEmbed()
      .setTitle("Bot Info")
      .setColor("00ffff")
      .setThumbnail(b.user.avatarURL)
      .setDescription(msg)
      
    message.channel.send(e);
  },
};