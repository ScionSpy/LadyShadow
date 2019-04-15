const { owners } = require('.././System/Bot/config.json');
const pkg = require('../../package.json');
const discord = require('discord.js');

const fs = require('fs');

module.exports = {
  coded : "2019-03-06",

  name : "settings",
  description : "Calls the settings set for the server.",

  guildOnly : true,
  cooldown : 10,


  execute(message, args){
    bot = message.client;
    let id = "";


    let owner = owners.some(id => {
      if(message.author.id == id) return true;
    });


    if(owner === true){
      if(args) id = args[0];
    };

    if(!id) id = message.guild.id;


    const settings = bot.g.get(id);

    if (!settings) return message.channel.send(`\`ERROR\` \`\`\`xl\nCould not read file "${id}.json" in "storage/shared/bots/${pkg.name}/Src/System/Guilds"\n\nPlease make sure that the file exists.\`\`\``);



    //---------
    //Display Settings

    g = bot.guilds.get(id)

    color = "00ffff";
    censor = false;

    welcome = "[Not Set]";
    farewell = "[Not Set]";
    rift = "[Not Set]";
    modlog = "[Not Set]";
    chatlog = "[Not Set]";

    admin = "[Not Set]";
    moderator = "[Not Set]";
    staff = "[Not Set]";
    muted = "[Not Set]";


    if(settings.color) color = settings.color;
    if(settings.censor.length <= 1) censor = true;

    if(settings.welcome) welcome = `#${bot.channels.get(settings.welcome).name} (${settings.welcome})`;
    if(settings.farewell) farewell = `#${bot.channels.get(settings.farewell).name} (${settings.farewell})`;
    if(settings.rift) rift = `#${bot.channels.get(settings.rift).name} (${settings.rift})`;
    if(settings.modlog) modlog = `#${bot.channels.get(settings.modlog).name} (${settings.modlog})`;
    if(settings.rift) chatlog = `#${bot.channels.get(settings.chatlog).name} (${settings.chatlog})`;

    if(settings.admin) admin = `@${bot.guilds.get(id).roles.get(settings.admin).name} (${settings.admin})`;
    if(settings.moderator) moderator = `@${bot.guilds.get(id).roles.get(settings.moderator).name} (${settings.moderator})`;
    if(settings.staff) staff = `@${bot.guilds.get(id).roles.get(settings.staff).name} (${settings.staff})`;
    if(settings.muted) muted = `@${bot.guilds.get(id).roles.get(settings.muted).name} (${settings.muted})`;


    const e = new discord.RichEmbed()
      .setAuthor(`${g.name}'s Settings`, g.iconURL)
      .setColor(color)
      .setFooter(`${g.name} - Settings || ${bot.functions.get("date").execute(Date.now())}`)

      .addField("General", `\`\`\`css\n\ \ \ Prefix : ${settings.prefix}\n\ \ \ DmHelp : ${settings.dmhelp}\n\ \ \ Censor : ${censor}\`\`\``)

      .addField("Channels", `\`\`\`css\n\ \ Welcome : ${welcome}\n\ Farewell : ${farewell}\n\ \ \ \ \ Rift : ${rift}\n\ \ \ Modlog : ${modlog}\n\ \ Chatlog : ${chatlog}\`\`\``)

      .addField("Roles", `\`\`\`css\n\ \ \ \ Admin : ${admin}\nModerator : ${moderator}\n\ \ \ \ Staff : ${staff}\n\ \ \ \ Muted : ${muted}\`\`\``)


    message.channel.send(e);
  },
};
