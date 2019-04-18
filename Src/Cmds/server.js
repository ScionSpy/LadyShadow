const d = require('discord.js');

module.exports = {
  coded : "2019-03-01",

  name : "server",
  description : "Provides all usefull and necessary server information.",

  guildOnly : true,


  execute(message){
    let g = message.guild;


    let users = 0;
    let bots = 0;

    g.members.forEach(mem => {
      if(mem.user.bot){
        bots++
      } else {
        users++
      };
    });
    /*
      name
      id
      owner
      members
      channels
    */

   let msg = `\`\`\`js\n\ \ \ \ Name : ${g.name}\n \ \ \ \ \ ID : ${g.id}\n \ \ Owner : ${g.owner.displayName}#${g.owner.user.discriminator}\n Members : ${users}\n \ \ \ Bots : ${bots}\nChannels : ${g.channels.size}\`\`\``;

    const e = new d.RichEmbed()
      .setTitle('ServerInfo')
      .setThumbnail(g.iconURL)
      .setColor("00ffff")
      .setDescription(msg)

    message.channel.send(e);
  },
};
