const { owners } = require('.././System/Bot/config.json');
const fs = require('fs');
const discord = require('discord.js');
const e = new discord.RichEmbed();
let list = ["prefix", "dmhelp", "admin", "moderator", "staff", "mute", "welcome", "farewell", "modlog", "rift"];


module.exports = {
  coded : "2019-03-06",
  
  name : "set",
  description : "Edit server settings.",
  usage : `"<${list.join(' | ')}>"`,
  
  guildOnly : true,
  args : true,
  cooldown : 5,
  
  
  execute(message, args){
    bot = message.client;
    let help = false;
    let listed = false;
    
    const {prefix} = require(`.././System/Settings/Guilds/${message.guild.id}.json`);
    const settings = require(`.././System/Settings/Guilds/${message.guild.id}.json`);
    let color = settings.color;
    if(!color) color = "00ffff";

    
    owners.some(id => {
      if(message.author.id != id){
    
        if(message.author.id != message.guild.owner.id){
          if(!settings.admin) return message.channel.send(`\`ERROR\` \`\`\`xl\nNo Admin Role found!!\n----------\nHave the server owner set an AdminRole with "${settings.prefix}set admin <roleMention>" to use this command.\`\`\``);
      
        if(message.member.roles.has(settings.admin) === false) return message.reply(`\`ERROR\` \`\`\`xl\nMust have the Admin role : "${message.guilds.roles.get(settings.admin).name}" to use the "set" command!!\`\`\``);
        };
      };
    });
   
    
        
    if(args.length === 1) help = true;
    
    
    list.some(word => {
      if(args[0].toLowerCase() === word) listed = true;
    });
    
    
    if(listed === false) return message.channel.send(`usage: ${prefix}set ${bot.cmds.get("set").usage}`, {code : "js"});
    
    
    if(help === true && listed === true) {
      switch(args.shift().toLowerCase()){
        case("prefix"):
          return message.channel.send(`\`\`\`css\n${prefix}set prefix <newPrefix>\`\`\``);
        break;
        case("dmhelp"):
          return message.channel.send(`\`\`\`css\n${prefix}set dmhelp <true || false>\`\`\``);
        break;
        case("admin"):
          return message.channel.send(`\`\`\`css\n${prefix}set admin <@adminRole || adminRoleID>\`\`\``);
        break;
        case("moderator"):
          return message.channel.send(`\`\`\`css\n${prefix}set moderator <@moderatorRole || moderatorRoleID>\`\`\``);
        break;
        case("staff"):
          return message.channel.send(`\`\`\`css\n${prefix}set staff <@staffRole || staffRoleID>\`\`\``);
        break;
        case("mute"):
          return message.channel.send(`\`\`\`css\n${prefix}set mute <@muteRole || muteRoleID>\`\`\``);
        break;
        case("welcome"):
          return message.channel.send(`\`\`\`css\n${prefix}set welcome <@welcomeChannel || welcomeChannelID>\`\`\``);
        break;
        case("farewell"):
          return message.channel.send(`\`\`\`css\n${prefix}set farewell <@farewellChannel || farewellChannelID>\`\`\``);
        break;
        case("modlog"):
          return message.channel.send(`\`\`\`css\n${prefix}set modlog <@modlogChannel || modlogChannelID>\`\`\``);
        break;
        case("rift"):
          return message.channel.send(`\`\`\`css\n${prefix}set rift <@riftChannel || riftChannelID>\`\`\``);
        break;
        default:
          return message.channel.send(`${prefix}set ${list.join(', ')}`);
      };
    };
    
    //End-Help
    //Start-SetCmds
    
    switch(args.shift().toLowerCase()){
      case("~"):
        message.channel.send("beepBoop.");
      break;
      case("prefix"):
        if(args.length == 0) return message.channel.send("Please input a new Prefix."); 
        
        oPrefix = settings.prefix;
        nPrefix = args.shift();
        settings.prefix = nPrefix;
        json = JSON.stringify(settings);
        fs.writeFileSync(`./Src/System/Settings/Guilds/${message.guild.id}.json`, json);
        
        e.setTitle("<:settings:561649800206876684> New Prefix!!");
        e.setColor(color);
        e.setAuthor(message.guild.name, message.guild.iconURL);
        e.setDescription(`\`\`\`css\nOld Prefix : ${oPrefix}\nNew Prefix : ${nPrefix}\`\`\`If Shadow refuses to respond have ${bot.users.get(message.guild.owner.id).tag} DM her with the following command.\`\`\`css\n..reset ${message.guild.id} prefix\`\`\``);

        return message.channel.send(e);

      break;
      
      
      case("dmhelp"):
      case("dm"):
      case("help"):
        if(args.length == 0) return message.channel.send("Enter either `true` or `false`."); 
        
        boolean = args[0].toLowerCase();
        if(boolean != "true" && boolean != "false") return message.reply(`\n\`${boolean}\` is niether a \`true\` nor \`false\` value.\n\ \ Please use either a \`true\` or \`false\` value.`);
        settings.dmhelp = boolean;
        json = JSON.stringify(settings);
        fs.writeFileSync(`./Src/System/Settings/Guilds/${message.guild.id}.json`, json);
    
        e.setTitle(`<:settings:561649800206876684> DM Help`);
        e.setColor(color);
        e.setAuthor(message.guild.name, message.guild.iconURL);
        e.setDescription(`\`\`\`css\nDM Help = ${settings.dmhelp}\`\`\``);
            
        return message.channel.send(e);
  
      break;


      case("staff"):
        if(args.length == 0) return message.channel.send("Please mention the \"Staff\" Role."); 
        
        role = message.mentions.roles.first().id;
        settings.staff = role;
        json = JSON.stringify(settings);
        fs.writeFileSync(`./Src/System/Settings/Guilds/${message.guild.id}.json`, json);

        e.setTitle(`<:settings:561649800206876684> New Staff Role`);
        e.setColor(color);
        e.setAuthor(message.guild.name, message.guild.iconURL);
        e.setDescription(`\`\`\`css\nStaff Role = ${message.guild.roles.get(settings.staff).name}\`\`\``);
        
        return message.channel.send(e);

      break;


      case("moderator"):
      case("mod"):
      if(args.length == 0) return message.channel.send("Please mention the \"Moderator\" Role."); 
      
      role = message.mentions.roles.first().id;
      settings.moderator = role;
      json = JSON.stringify(settings);
      fs.writeFileSync(`./Src/System/Settings/Guilds/${message.guild.id}.json`, json);

      e.setTitle(`<:settings:561649800206876684> New Moderator Role`);
      e.setColor(color);
      e.setAuthor(message.guild.name, message.guild.iconURL);
      e.setDescription(`\`\`\`css\nModerator Role = ${message.guild.roles.get(settings.moderator).name}\`\`\``);
        
      return message.channel.send(e);

    break;


    case("admin"):
    if(args.length == 0) return message.channel.send("Please mention the \"Staff\" Role."); 
    
    role = message.mentions.roles.first().id;
    settings.admin = role;
    json = JSON.stringify(settings);
    fs.writeFileSync(`./Src/System/Settings/Guilds/${message.guild.id}.json`, json);

    e.setTitle(`<:settings:561649800206876684> New Admin Role`);
    e.setColor(color);
    e.setAuthor(message.guild.name, message.guild.iconURL);
    e.setDescription(`\`\`\`css\nAdmin Role = ${message.guild.roles.get(settings.admin).name}\`\`\``);
        
    return message.channel.send(e);

  break;
      default:
        return message.channel.send(`The functionality of the \`set\` command has not yet been coded, please wait for future updates.`);
    };
  },
};