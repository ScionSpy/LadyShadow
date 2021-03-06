/*
 * {HSF}LadyShadow#7111
 *  Alpha - v.3.0.3
 *  Feburary 25'th, 2019
 *  Devd by : ScionSpy & Bejabjay
*/


const fs = require('fs');
const package = require('.././package.json')

const discord = require('discord.js');
const {gPrefix, oPrefix, owners, support } = require('./system/Bot/config.json');
const token = require('../.././tokens.json').LadyShadow;


//shadowServers is a list of channels for shadow to send Guild Join/Leave msgs.
const shadowServers = [
  {
  "name" : "Shadow Community",
  "id" : "432290478780579845",
  "server" : "432290478780579845",
  "support" : "499074006511517696",
  "report" : ""
  },
  {
    "name" : "The Devil Family",
    "id" : "361779296513294336",
    "server" : "361779296513294336",
    "support" : "376685678164967425",
    "report" : ""
  },
  {
  "name" : "The Community",
  "id" : "566121499745058818",
  "server" : "570337261120651290",
  "support" : "570337280477364234",
  "report" : "570337300278411284"
  }
];



//----------
//----------


const bot = new discord.Client();


/**
 * Random "bot.[file]'s"
 */

//Checks if Bot is Alpha.
bot.alpha = false;
if(package.alpha) bot.alpha = true;

//----------
//----------


//Move below collections to exe module.

bot.cmds = new discord.Collection();
bot.config = require('./system/Bot/config.json');
bot.defaults = require('./System/Settings/default.js');
bot.functions = new discord.Collection();
bot.g = new discord.Collection();
bot.tz = new discord.Collection();
bot.u = new discord.Collection();

/**
 * SagaSpace SetUp
 *
*/
bot.ss = new discord.Collection(),
bot.ss.cmds = new discord.Collection();
bot.ss.factions = new discord.Collection();
bot.ss.formulas = new discord.Collection();

/**
 * Srpg SetUp
 *
*/
bot.srpg = new discord.Collection();
bot.srpg.cmds = new discord.Collection();
bot.srpg.config = require('./System/Srpg/System/Settings/config.json');
bot.srpg.factions = new discord.Collection();
bot.srpg.functions = new discord.Collection();
bot.srpg.shop = new discord.Collection();
bot.srpg.users = new discord.Collection();

/**
 * Srpg SetUp
 *
*/
bot.tos = new discord.Collection();
bot.tos.cmds = new discord.Collection();

/**
 * Support SetUp
 * Support COLLECTIONS is not collecting
 * * (Not SetUp)
 *
*/
bot.support = new discord.Collection();
bot.support.cmds = new discord.Collection();
bot.support.shadowServers = shadowServers;
bot.support.owners = owners;
bot.support.users = support;

//End Collections

const cooldowns = new discord.Collection();


//----------
//----------


bot.collections = new discord.Collection();
  const collections = fs.readdirSync('./Src/System/Bot/Collections').filter(file => file.endsWith('.js'));
  for (const file of collections) { 	const collection = require(`./System/Bot/Collections/${file}`);
    bot.collections.set(collection.name, collection);
};


//----------
//----------


bot.invites = new discord.Collection();
const inviteFiles = fs.readdirSync('./Src/System/Invites').filter(file => file.endsWith('.json'));
  for (const file of inviteFiles) { 	const invite = require(`./System/Invites/${file}`);
    bot.invites.set(invite.tag, invite);
};



//----------
//----------


bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
//bot.on("debug", (e) => console.info(e));


//----------
//----------


bot.on('ready', () => {
  bot.functions.get('ready').execute(bot);
});


bot.collections.get('g').execute(bot, fs);
bot.collections.forEach(collect => {
 collect.execute(bot, fs)
});


//----------
//----------


bot.on('message', (message) => {

  /**
   * Expirimental verision of "Rift".
   */

  try{
    if(message.channel.type == "dm"){
      if(message.author.bot) return;
      if(message.author.id != owners[0] && message.author.id != owners[1]) return;
      msg = `${message.author.tag}: ${message.content}`;
      message.react('📜');

      owners.forEach(o => {
        if(o == owners[2]) return;
        if(message.author.id === o) return;

        if (message.attachments.first()) {

          bot.users.get(o).send(msg, {file: message.attachments.first().url}).then().catch(err => bot.functions.get("err").execute(message.err));
        } else {

          bot.users.get(o).send(msg).then().catch(err => bot.functions.get("err").execute(message.err));
        };
      });
    };
  }catch(err){
    bot.functions.get("err").execute(message, err);
  };





  //Identify Owner Presence.
  let isOwner = false;
  if(message.author.id === owners[0]) isOwner = true;
  if(message.author.id === owners[1]) isOwner = true;


  let settings = "";
  if(message.channel.type === 'text'){
    settings = require(`./System/Settings/Guilds/${message.guild.id}.json`);

    if(!settings){
      g = message.guild;
      u = message.guild.owner.user;
      msg = `No settings file located for:\`\`\`css\n\ \ \ \ ID : ${g.id}\n\ Guild : ${g.name}\n\ Owner : ${u.tag}\n\ \ U.ID : ${u.id}\nJoined : ${g.members.get(bot.user.id).joinedAt}\`\`\``;

      owners.forEach(o => {
        bot.users.get(o).send(msg);
      });
    }
  }


  //----------
  //----------


  //Delete Below when add Censors.
  let arggs = message.content.trim().split(/ +/g);


  if(message.channel.type == "text" && message.guild.id == "147949613784104960") {
    const blocked = ["https", "www."];
    const whitelisted = ["213250789823610880"];

    let wh = whitelisted.some(id => {
      if(message.author.id == id) return true;
    });

    let bl = blocked.some(phrase => {
      if(message.content.toLowerCase().includes(phrase)) return true;
    });

    if(wh === false && bl === true){
      message.delete()
        .then(message.reply("you posted a link, witch isnt allowed here. If you believe this was made in error, please contact the server owner."));
    };
  };

  //End Delete



  if(message.content.startsWith(oPrefix)){
    if(!isOwner) return;
  };


  //--------
  //--------


  //Identify Prefix used.
  let prefix = "";
  //const prefixMention = new RegExp(`^<@!?${bot.user.id}> `);
  //const mPrefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : '!';
  if(message.content.startsWith(settings.prefix)) prefix = settings.prefix;
  if(message.content.startsWith(gPrefix)) prefix = gPrefix;
  if(message.content.startsWith(oPrefix)) prefix = oPrefix;
  //if(message.content.startsWith(mPrefix)) prefix = mPrefix;
  if(!prefix) return;


  //Identify if Channel == "Dm's".
  dm = false;
  if(message.channel.type == "dm"){
    prefix = gPrefix;
    dm = true;
  }


  //----------
  //----------

  if(dm != true){
    if(!message.content.startsWith(prefix) || message.author.bot) return;
  };


 /*if (!message.channel.permissionsFor(bot.user.id).has('SEND_MESSAGES')) {
    return message.author.send(`I cannot post in ${message.channel.name},\nI do not have the \`SEND_MESSAGES\` permssion.`)
      .catch(() => { return; });
  };*/


  //--------
  //--------


  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmdName = args.shift().toLowerCase();
  const cmd = bot.cmds.get(cmdName) || bot.cmds.find(c => c.aliases && c.aliases.includes(cmdName));
  if (!cmd) return;


  //----------
  //----------


  //Args
  if (cmd.args && !args.length){
    let reply = `You didn't provide any arguments, ${message.author}!`;

    //Usage
    if (cmd.usage){
      reply += `\nThe proper usage would be: \`${prefix}${cmd.name} ${cmd.usage}\``;
      return message.channel.send(reply);
    };
  };

  //guildOnly
  if (cmd.guildOnly && message.channel.type !== 'text'){
    return message.channel.send("This command can only be used serverSide.");
  };

  //Owner?
  if(cmd.owner){
    if(!isOwner) return;
  };

  /*
  //if(!owner){
    //Cooldown
    if (!cooldowns.has(cmd.name)){
      cooldowns.set(cmd.name, new discord.Collection());
    };


    //Create Cooldown if cmd has cooldown enabled..
    const now = Date.now();
    const timestamps = cooldowns.get(cmd.name);
    const cooldownAmount = (cmd.cooldown || 3) * 1000;
    console.log("startCooldown");


    if (timestamps.has(cmd.name, message.author.id)){
      console.log("startedCooldown");
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if (now < expirationTime){
        console.log("cooldownEnabled");
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing \`${cmd.name}\`.`);
      };
    }else{
      console.log("cooldownNotEnabled");
      timestamps.set(message.author.id, now);
      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    };
  //}
  */

  //----------
  //----------


    try {
    	cmd.execute(message, args);
    } catch (error) {
      //console.log(error);
      message.channel.send(bot.functions.get("err").execute(message, error));
      message.reply(`there was an error trying to execute \`${cmdName}\`!!`);
    };
});


//----------
//----------


//send func to Func folder
  //guildJoin exe-func-newGuild

bot.on("guildCreate", (guild) => {
    bot.functions.get('newGuild').execute(guild);
});

bot.on("guildDelete", (guild) => {
    bot.functions.get('leftGuild').execute(guild);
});



//----------
//----------


bot.on("guildMemberAdd", (member) => {
  settings = require(`./System/Settings/Guilds/${member.guild.id}.json`);

  if(!settings.welcome) return;
  if(!settings.wMsg) {
    wMsg = `<@${member.user.id}> has joined the server!!\nNew Member Count : \`(${member.guild.members.size})\``;
  } else {
    wMsg = settings.wMsg;
  };

  e.setAuthor(member.user.tag, member.user.avatarURL);
  e.setThumbnail(member.user.avatarURL);
  e.setColor("GREEN");
  e.setDescription(wMsg);
  e.setFooter(`${member.user.tag} (${member.user.id}) || ${bot.functions.get('date').execute(Date.now())}`);

  member.guild.channels.get(settings.welcome).send(e);
});



//---------
//----------



bot.on("guildMemberRemove", (member) => {
  settings = require(`./System/Settings/Guilds/${member.guild.id}.json`);

  if(!settings.farewell) return;
  if(!settings.fMsg){
    fMsg = `${member.user.tag} has left the server..\nNew Member Count : \`(${member.guild.members.size})\``;
  } else {
    fMsg = settings.fMsg;
  };

  e.setAuthor(member.user.tag, member.user.avatarURL);
  e.setThumbnail(member.user.avatarURL);
  e.setColor("RED");
  e.setDescription(fMsg);
  e.setFooter(`${member.user.tag} (${member.user.id}) || ${bot.functions.get('date').execute(Date.now())}`);

  member.guild.channels.get(settings.farewell).send(e);
});


//----------
//----------


  //Let's turn her on. ♡♡
bot.login(token);
