module.exports = {
  coded : "2019-02-26",

  name : "help",
  description : "A list of commands that Shadow holds.",


  execute (message, args) {

    e = new discord.RichEmbed()

   //Set cmd req stuffs
   const { cmds } = message.client;
    const data = [];
    const list = [];

   //Set cmd global.Variables;
    let { prefix, dmhelp } = require(`.././System/Settings/Guilds/${message.guild.id}.json`);
    let ch = "";

    if(message.channel.type == "text"){
      if(!dmhelp){
        ch = message.author;
      }else{
        ch = message.channel;
      }
    } else {
      ch = message.channel;
    }

    if (!args.length){

      cmds.map(cmd => {
        if(cmd.easterEgg) return;
        list.push(cmd.name);
      });

      e.setTitle("Main Commands")
      e.setDescription(`\`\`\`css\n• ${list.join((',\n• '))}\`\`\``)
      e.setFooter(`\`${prefix}help [command name]\``);

      return ch.send(e)

      /*.then(() => {
        if (message.channel.type === 'dm') return;
        message.reply('I\'ve sent you a DM with all my commands!'); 	})

        .catch(error => { 		console.error(`Could not send help DM to ${message.author.tag}.\n`, error);

        message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
        });*/
    };


    //Specific Command Help

    const name = args[0].toLowerCase();
    const cmd = cmds.get(name) || cmd.find(c => c.aliases && c.aliases.includes(name));
    if (!cmd){
      return ch.send(`${message.user.id} that\'s not a valid command!`);
    }

    e.setTitle(cmd.name);

    if (cmd.aliases) e.addField(`Aliases`, `\`\`\`css\n${cmd.aliases.join(', ')}\`\`\``);
    if (cmd.cooldown) (`Cooldown`, `\`\`\`css\n${cmd.cooldown || 3} second(s)`);
    if (cmd.usage) e.addField(`Usage`, `\`\`\`css\n${prefix}${cmd.name} ${cmd.usage}\`\`\``);
    if (cmd.description) e.addField(`Description`, `\`\`\`css\n${cmd.description}\`\`\``);

    ch.send(e);

  },
};
