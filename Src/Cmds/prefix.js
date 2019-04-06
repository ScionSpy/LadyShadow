module.exports = {
    coded : "2019-03-30",
    name : "prefix",
    description : "Shows your servers Prefix.",
    guildOnly : true,

    execute(message, args){
        bot = message.client;
        const {owners} = require('.././System/Bot/config.json');

        if(args.length != 0){
            if(owners.includes(message.author.id)){
                id = args[0];
                if(!bot.guilds.get(id)) return message.channel.send(`I am not in any guild with an ID of \`${id}\``);
                prefix = require(`.././System/Settings/Guilds/${id}.json`).prefix;
                return message.reply(`The prefix for guild-**${bot.guilds.get(id).name}** is \`${prefix}\``);
            };
        };

        prefix = require(`.././System/Settings/Guilds/${message.guild.id}.json`).prefix;
        message.reply(`This server's prefix is \`${prefix}\``);
    }
};