const { owners } = require('.././System/Bot/config.json');
const pkg = require('../../package.json');

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
    
    
    
    const codeFile = fs.readFileSync(`./Src/System/Settings/Guilds/${id}.json`, "utf-8");
    
    
    const code = String(codeFile);
    
    message.channel.send(code, {code: "js", split: true});
  },
};