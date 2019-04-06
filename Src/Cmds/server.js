const d = require('discord.js');

module.exports = {
  coded : "2019-03-01",
  
  name : "server",
  description : "Provides all usefull and necessary server information.",
  
  guildOnly : true,
  
  
  execute(message){
    let g = message.guild;
    
    /*
      name
      id
      owner
      members
      channels
    */
    
   let msg = `\`\`\`js\n\ \ \ \ Name : ${g.name}\n \ \ \ \ \ ID : ${g.id}\n \ \ Owner : ${g.owner.displayName}#${g.owner.user.discriminator}\n Members : ${g.members.size}\nChannels : ${g.channels.size}\`\`\``;
    
    const e = new d.RichEmbed()
      .setTitle('ServerInfo')
      .setThumbnail(g.iconURL)
      .setColor("00ffff")
      .setDescription(msg)
      
    message.channel.send(e);
  },
};