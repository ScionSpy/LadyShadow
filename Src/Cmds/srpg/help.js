module.exports = {
    coded : "2019-03-20",

    name : "help",
    description : "Shadow.RPG Help.",

    execute(message, args) {

        const data = [];
        const { cmds } = message.client.srpg;


        if (!args.length){
      
            data.push("Here's a list of all my commands:");
            data.push(`\`\`\`${cmds.map(cmd => cmd.name).join(`, `)}\`\`\``);
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
            
            return message.channel.send(data, { split: true })
            
            /*.then(() => {
                if (message.channel.type === 'dm') return;
                message.reply('I\'ve sent you a DM with all my commands!');
            })
            .catch(error => {
                //console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
            });*/
        };
          
          
        const name = args[0].toLowerCase();
        const cmd = cmds.get(name) || cmds.find(c => c.aliases && c.aliases.includes(name));

        if (!cmd){
          return message.reply('that\'s not a valid command!');
        }
          
        data.push(`**Name:** ${cmd.name}`);
        if (cmd.aliases) data.push(`**Aliases:** ${cmd.aliases.join(', ')}`);
        if (cmd.description) data.push(`**Description:** ${cmd.description}`);
        if (cmd.usage) data.push(`**Usage:** ${prefix}${cmd.name} ${cmd.usage}`);
          
        data.push(`**Cooldown:** ${cmd.cooldown || 3} second(s)`);
          
        message.channel.send(data, { split: true });
    }

};