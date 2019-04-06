module.exports = {
  coded : "2019-03-16",

  name : "formula",
  aliases : ["forms"],
  description : "Provides the formula Results based on correct Data.",
  usage : "<formType> || ss formula list",

  args : true,


  execute(message, args){
    bot = message.client;
    discord = require('discord.js');
    prefix = bot.g.get(message.guild.id).prefix;
    
    formType = args.shift().toLowerCase();
    
    if(formType == "list"){
      list = [];
      bot.ss.formulas.map(form => {
        list.push(form.name);
      });
      return message.channel.send(`List of Forms\`\`\`css\n${list.join(', ')}\`\`\``);
    };


    const formula = bot.ss.formulas.get(formType);
    if(!formula) return message.channel.send(`[ERROR]\nCommand ["${formType}"] not found in the SagaSpace DataBase!\n(Try using "${prefix}ss formula list"!)`, {code:'css'});
    
  //Args 
    if (formula.args && !args.length){
    let reply = `You didn't provide any arguments, ${message.author}!`;
  
    //Usage  
      if (formula.usage){
      reply += `\nThe proper usage would be: \`${prefix}ss formula ${formula.name} ${formula.usage}\``;
      return message.channel.send(reply);
      };
    };
  
    try { 
     	formula.execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply(`there was an error trying to execute the formula \`${formula.name}\`!!`);
    };
  }
};