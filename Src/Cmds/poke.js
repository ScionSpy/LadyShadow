module.exports = {
  coded : "2019-03-01",
  
  name : "poke",
  aliases : ["boop"],
  description : "get someone's attention.",
  usage : "<userMention>",
  
  guildOnly : true,
  args : true,
  cooldown : 7,
  
  
  execute(message, args){
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(`But ${message.author.username}, that user doesnt exist on this server..`);
    
    message.channel.send(`${member}, ${message.author} just poked you!!`);
  },
};