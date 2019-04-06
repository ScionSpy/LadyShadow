const discord = require('discord.js');

module.exports = {
  coded : "2019-02-25",
  
  name : "user",
  description : "Displays information about a particular user.",
  
  guildOnly : true,
  
  
  execute (message, args) {
    bot = message.client;

    var member = message.mentions.members.first();
    
    if(!member) var member = message.member;
    try{
      settings = require(`.././System/Settings/Users/${member.id}.json`);
    } catch (err) {
      settings = {
        "registered" : false,
        "tz" : null
      };
    };

    try{
      srpg = require(`.././System/Srpg/Users/${member.id}.json`)
    } catch(err) {
      srpg = {
        "registered" : false,
        "name" : null
      }
    };

    
    const e = new discord.RichEmbed()
      .setColor("00ffff")
      .setTitle(`User Info - ${member.user.tag}`)
      .setThumbnail(member.user.avatarURL)
      .setFooter("No more UserInfo.")
      

    
      
    if(member.user.id == message.guild.owner.id){
      var owner = `----==☆ Server Owner ☆==----\n`;
    }else{
      var owner = "";
    };
      
    set = [];

    if(bot.u.get(member.id)){
        //Total Chars = "[8-Space] : [status]"
      set.push(`\n\ \ \ ---==☆ User Settings ☆==---\n\ \ \ \ \ \ TZ : ${settings.tz}`);
    }else{
      set.push("\n\ \ \ ---==☆ User is not Shadow Registered ☆==---");
    };



    if(bot.srpg.users.get(member.id)){
        //Total Chars = "[8-Space] : [status]"
      set.push(`\n\n\ \ \ \ ---==☆ S.RPG Settings ☆==---\n\ \ \ \ Name : ${srpg.name}`);
    }else{
      set.push("\n\n\ \ \ \ ---==☆ User is not S.RPG Registered ☆==---");
    };

      var user = `${owner}\ \ \ \ \ \ ID : ${member.user.id}\n \ \ \ Nick : ${member.nickname}\nUsername : ${member.user.username}\n Discrim : #${member.user.discriminator}\n\n${set.join('')}`;
      
     
      e.setDescription(`\`\`\`css\n${user}\`\`\``)
      
      message.channel.send(e);
  },
};