discord = require('discord.js');

module.exports = {
    coded : "2019-04-22",
    name : "reload",
    description : "reloads specified cmd.",
    usage : "<cmd> || <path <cmd>>",
    owner : true,

    help : "owner",

    execute (message, args) {
        bot = message.client;

        if(!args || args.size < 1) return message.reply("Provide a command or path to reload.");

        cmd = args.pop();
        path = `./${cmd}.js`
        if(args.length >= 1) path = `./${args.join('/')}/${cmd}.js`;

      // Check if the command exists and is valid
        cmdFolders = {
            "srpg" : bot.srpg.cmds,
            "ss" : bot.ss.cmds,
            "support" : bot.support.cmds,
            "tos" : bot.tos.cmds
        }


        if (args.length >= 1){
            if(!cmdFolders[args].has(cmd)) {
                return message.reply(`${path} does not exist`);
            };
        } else {
            if(!bot.cmds.has(cmd)) {
                return message.reply(`${path} does not exist`);
            };
        };

      // the path is relative to the *current folder*, so just ./filename.js
        delete require.cache[require.resolve(path)];

      // We also need to delete and reload the command from the bot.cmds Enmap
        if (args.length >= 1){
            cmdFolders[args].delete(cmd);
        } else {
            bot.cmds.delete(cmd);
        };


        const cmdFile = require(path);
        if (args.length >= 1){
            cmdFolders[args].set(cmd, cmdFile);
        } else {
            bot.cmds.set(cmd, cmdFile);
        };

        args.push(cmd);


        e = new discord.RichEmbed();
        e.setColor("ffff00")
        e.setTitle("Reload")
        e.setDescription(`__**${cmd}**__ has been reloaded.\nPath : \`./LadyShadow-git/Src/Cmds/${args.join('/')}.js\``)
        e.setFooter(bot.functions.get("date").execute(Date.now()))

        message.channel.send(e);
    }
}
