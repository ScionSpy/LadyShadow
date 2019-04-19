module.exports = {
    coded : "2019-03-16",

    name : "srpg",
    description : "Provides access to the Shadow.RPG command db",
    usage : "<cmd>",

    args : true,


    execute(message, args){
      bot = message.client;
      const {srpg} = message.client;
      discord = require('discord.js');
      prefix = bot.g.get(message.guild.id).prefix;

      if(args.length == 0) return message.reply(`Please enter a valid S.RPG command to continue.\nNot sure which command to use? Try \`${prefix}srpg help\``);

      //return message.channel.send("cmd-Shadow.RPG in development.\n[return]", {code:'css'});

      command = args.shift().toLowerCase();

      const cmd = bot.srpg.cmds.get(command) || bot.srpg.cmds.find(c => c.aliases && c.aliases.includes(command));

      if(!cmd) return message.channel.send(`[ERROR]\nCommand ["${command}"] not found in the Shadow.RPG DataBase!\n(Try using "${prefix}srpg help"!)`, {code:'css'});

    //Arg
      if (cmd.args && !args.length){
      let reply = `You didn't provide any arguments, ${message.author}!`;

    //Usage
        if (cmd.usage){
          reply += `\nThe proper usage would be: \`${prefix}srpg ${cmd.name} ${cmd.usage}\``;
          return message.channel.send(reply);
        };
      };

    //Srpg User??
      let srpgUser = false;
      bot.srpg.users.map(settings =>{
        if(message.author.id != settings.id) return;
        if(message.author.id == settings.id) srpgUser = true;
      });

      if(!srpgUser){
        reply = `You need to be registered with the S.RPG in order to make suggestions for the S.RPG.\nIn order to register, start with \`${prefix}srpg start\``;
        return message.channel.send(reply);
      };


      cmdDenyList = require('.././System/Srpg/System/Settings/config.json').cmdDenyList;

      cmdDenyList.forEach(listing => {
        if(cmd == listing) return message.channel.send(`${cmd} has been temporarily disabled by the S.RPG Admins.`)
      });

      try {
        cmd.execute(message, args, srpg);
      } catch (error) {
        console.error(error);
        message.reply(`there was an error trying to execute \`srpg ${cmd.name}\`!!`);
      };
    }
  };
