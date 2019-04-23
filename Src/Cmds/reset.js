const fs = require('fs');
const discord = require('discord.js');
const e = new discord.RichEmbed();
gPrefix = require('.././System/Bot/config.json').gPrefix;

const list = ["prefix", "staff"]


module.exports = {
    coded : "2019-03-30",
    name : "reset",
    description : "Gives a server owner the ability to Overwrite, or Reset, their Server Settings.\nPrimarily used for resetting a non-functioning prefix.",
    usage : "list || <guild.ID> <setting.Name>",

    help : "server",

    execute(message, args){
        bot = message.client;

        if(message.channel.type != "dm") return message.reply("\n`Cmd-`Reset is only availble through DM's, and then only a server owner can use it.");
        if(args.length == 0) return message.reply(`\`\`\`css\n${gPrefix}reset list\n${gPrefix}reset <guild.ID> <setting.Name>\`\`\``)


        if(args[0] == "list") {
            e.setTitle("Available 'reset' subCmds");
            e.setColor("00ffff");
            e.setFooter("\"..reset <guild.ID> <subCmd>\"");
            e.setDescription(`\`${list.join(', ')}\``);

            return message.channel.send(e);
        };


        g = bot.guilds.get(args[0]);
        if(!g) return message.channel.send(`I'm sorry, either \`${args[0]}\` is an invalid guild.ID, or I am not in that Guild.\nIf you believe this is an error, please contact support.`);
        if(message.author.id != g.owner.id) return message.channel.send(`Only the server owner \`${bot.users.get(g.owner.id).tag}\` can use this command for this server.\nIf you believe this is an error, please contact support.`);

        settings = require(`.././System/Settings/Guilds/${args[0]}.json`);


        e.setFooter('');
        e.setDescription('');


        switch(args[1]){
            case("prefix"):
                settings.prefix = gPrefix;
                json = JSON.stringify(settings);
                fs.writeFileSync(`./Src/System/Settings/Guilds/${args[0]}.json`, json);

                e.setTitle("Prefix Reset");
                e.setAuthor(g.name, g.iconURL);
                e.setColor("00ffff");
                e.setDescription(`\`\`\`css\nNew Prefix : ${gPrefix}\`\`\``);

                return message.channel.send(e);
            break;
            case("staff"):
                settings.staff = "";
                json = JSON.stringify(settings);
                fs.writeFileSync(`./Src/System/Settings/Guilds/${args[0].json}`, json);

                e.setTitle("Staff Reset");
                e.setAuthor(g.name, g.iconURL);
                e.setColor("00ffff");
                e.setDescription(`\`\`\`css\nStaff Role Cleared\`\`\``);

                return message.channel.send(e);
            break;
            default:
              return message.channel.send(`There's no \`reset-subCmd\` named \`${args[1]}\`\nPlease try \`..reset list\`\n\`reset is still under dev\``);
        };
    }
};
