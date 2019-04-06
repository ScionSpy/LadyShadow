module.exports = {
  coded : "2019-02-25",
  name : "object",
  description : "An inside joke on how frustrating LS.v2 was.",
  
  guildOnly : true,
  easterEgg : true,
  
  
  execute(message){
    
    /*if (!message.guild.members.me.hasPermission('MANAGE_MESSAGES')){
      try{
        message.author.send("I apolagize, however I require `MANAGE_MESSAGES` to do that.");
      }catch(err){
        console.log(err)
        message.channel.send("... Really....");
      };
    };*/
    
    message.delete();
    message.channel.send(`\`\`\`xl\n[objectObject]\`\`\``);
  },
};