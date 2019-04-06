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
    
    
    let msg = `\`\`\`js\n \ Name : ${b.user.tag}\n \ \ \ ID : ${b.user.id}\nGuilds : ${b.guilds.size}\n Users : ${b.users.size}\n\`\`\``;
    
    
    const e = new d.RichEmbed()
      .setTitle("Bot Info")
      .setColor("00ffff")
      .setThumbnail(b.user.avatarURL)
      .setDescription(msg)
      
    message.channel.send(e);
  },
};