module.exports = {
  coded : "2019-02-25",
  
  name : "ping",
  description : "pingPong.",
  
  
  execute (message, args){
    message.channel.send("Pinging...")
      .then(msg => {
        msg.edit(`Pong!!\`(${msg.createdTimestamp - message.createdTimestamp}ms)\``);
      });
  },
};