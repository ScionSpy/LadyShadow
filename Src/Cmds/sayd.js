module.exports = {
  coded : "2019-02-25",
  
  name : "sayd",
  description : "Repeats after you.\n!! Require 'MANAGE_MESSAGES' !!",
  usage : "<messageToRepeat>",
  
  
  args : true,
  
  
  
  execute (message, args) {
   
   if (!message.guild.members.get(message.client.user.id).permissions.has('MANAGE_MESSAGES')){
     return message.reply('there was an error!!\n\ \ I don\'t have the `MANAGE_MESSAGES` permission.')
   };
   
   
   message.delete();
   message.channel.send(args.join(' '));
 
    
  },
};