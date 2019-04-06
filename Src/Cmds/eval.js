function clean(text){
  if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else return text;
};

module.exports = {
  coded : "2019-02-26",
  name : "eval",
  description : "....",
  usage : "<code>",
  
  args : true,
  owner : true,
  
  
  execute (message, args){
    //Define eval phrases

      const bot = message.client;
      const discord = require('discord.js');
      const fs = require('fs');
      const {oPrefix, owners} = require('.././System/Bot/config.json');
      const e = new discord.RichEmbed();

    //----------
    //----------
    
    
    try{
      const code = args.join(" ");
      let evaled = eval(code);
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
      message.channel.send(clean(evaled), {code:"xl", split:true});
    }catch(err){
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  },
};