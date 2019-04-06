discord = require('discord.js');
e = new discord.RichEmbed();

module.exports = {
  coded : "2019-04-03",
  name : "tos",
  description : "Shows all ToS Members and their status's",
  guildOnly : true,
  easterEgg : true,

  execute(message){

  //Grab Guild.Members and Guild.Settings for the Guild 'cmd; was executed in.
    g = message.guild;
    mem = g.members;
    bot = message.client;

    if(g.id != "416906584900239370")return;

  //Create the required Separate Arrays.
    o = [];
    i = [];
    d = [];
    of = [];
    s = [];
    data = [];
  


  //Grab the "Status Emojis" from the Support Server.
    emo = function(e){
        em = bot.guilds.get("416906584900239370").emojis;
  
        if(e == "o") return em.get("561649276682240009");
        if(e == "i") return em.get("561649673832759317");
        if(e == "d") return em.get("561649719978229791");
        if(e == "of") return em.get("561649770452484103");
    };
  

  //Learn what the Staff status's are and display that info into their Status "list".
    status = function(user, member){
        t = `${member.displayName}#${user.discriminator}`;
        switch(u.presence.status){
        case('online'):
            o.push(`${emo("o")} ${t}`);
        break;
        case('idle'):
            i.push(`${emo("i")} ${t}`);
        break;
        case('dnd'):
         d.push(`${emo("d")} ${t}`);
        break;
        case('offline'):
          of.push(`${emo("of")} ${t}`);
        break;
        default:
          s.push(`[-] ${t}`);
        };
    };




    tos = "425415778385264650";
    if(!tos)return message.channel.send(`\`ERROR\` \`\`\`css\nNo ToS role designated.\n\`Contact the server Administrator\` \`\`\``);


  //Put together and use all of this information.
    mem.forEach(m => {
      u = m.user;
      if(m.roles.has(tos)){
          status(u, m);
      };
    });


  //Slap Arrays Togethaa!!!
    if(o) list = data.concat(o);
    if(i) list = list.concat(i);
    if(d) list = list.concat(d);
    if(of) list = list.concat(of);
    if(s) list = list.concat(s);


  //If no users exist under the "Staff" role.
    if(list.length == 0){
      msg = ':warning: No ToS\'ers Found!! :warning:';
    }else{
      msg = list.join(',\n');
    };


    e.setAuthor(`${g.name} ToS\'ers`, g.iconURL);
    e.setColor("00ffff");
    e.setDescription(msg);

    message.channel.send(e);
  }
};