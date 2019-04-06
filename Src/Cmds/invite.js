const discord = require('discord.js');

module.exports = {
  coded : "2019-03-06",
  
  name : "invite",
  description : "Provides bot links.",
  usage : "[partners || advertised]",
  
  cooldown : 4,
  
  
  execute(message, args){
    bot = message.client;
    let inv = bot.invites;
    let g = "";
    let u = "";
    let i = "";
    let tags = [];
    let e = "";
    let partnered = "";
    
    
    let invite = function(tag){
      i = inv.get(tag);
      g = bot.guilds.get(i.id);
      u = bot.users.get(i.userID);
      
      
      if(!bot.guilds.get(i.id)) return message.reply("unfortunatly, I am no longer in this guild.\n\ \ I require certain information specific to the selected guild to run this command.");
      
      //if(i.partnered === true){
        partnered = `\`\`\`css\nPartners Since :\n• ${i.date}\`\`\``;
      //};
      
      
      e = new discord.RichEmbed()
        .setTitle(g.name)
        .setColor(i.color)
        .setThumbnail(g.iconURL)
        .setFooter(u.tag, u.avatarURL)
        .setDescription(`[Invite](${i.invite})\`\`\`css\n${i.description}\`\`\`${partnered}`)
    };
    
    
    //Start-Invites
    
    
    if(args.length === 0){
      
      invite('ls');
      
    } else {
      switch(args[0].toLowerCase()){
        case('ls'):
          invite('ls');
        break;
        case("ph"):
          invite("ph");
        break;
        case('gg'):
          invite('gg');
        break;
        case('ss'):
          invite('ss');
        break;
        case('rb'):
          invite('rb');
        break;
        case('as'):
          invite('as');
        break;
        default:
          e = `Please enter only "invite" or enter a tag from below.\`\`\`css\n${tags.join(', ')}\`\`\``;
          
      };
    };
      
    
    message.channel.send(e);
  },
};