module.exports = {
  coded : "2019-03-16",
  
  name : "ss",
  description : "Provides access to the SagaSpace command db",
  usage : "<cmd>",
  
  args : true,
  
  
  execute(message, args){
    bot = message.client;
    const {ss} = bot;
    discord = require('discord.js');
    prefix = bot.g.get(message.guild.id).prefix;
    

    if(args.length == 0) return message.reply(`Please enter a valid SS command to continue.\nNot sure which command to use? Try \`${prefix}ss help\``);
    
    //return message.channel.send("cmd-SagaSpace in development.\n[return]", {code:'css'});
  

  const cmdName = args.shift().toLowerCase();  
  const cmd = bot.ss.cmds.get(cmdName) || bot.ss.cmds.find(c => c.aliases && c.aliases.includes(cmdName));
  if (!cmd) return;
  if(!cmd) return message.channel.send(`[ERROR]\nCommand ["${cmd}"] not found in the SagaSpace DataBase!\n(Try using "${prefix}ss help"!)`, {code:'css'});

  
  
  //----------
  //----------
  
  
  //Args
  if (cmd.args && !args.length){
    let reply = `You didn't provide any arguments, ${message.author}!`;
    
    //Usage
    if (cmd.usage){
      reply += `\nThe proper usage would be: \`${prefix}ss ${cmd.name} ${cmd.usage}\``;
      return message.channel.send(reply);
    };
  };


    
    try { 
    	cmd.execute(message, args, ss);
    
    } catch (error) {
      
      console.error(error);
      message.reply(`there was an error trying to execute \`ss ${cmd.name}\`!!`);
      
    };
    
    
  }
};