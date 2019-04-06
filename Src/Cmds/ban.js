module.exports = {
    coded : "2019-04-05",
    name : "ban",
    aliases : ["hammer"],
    description : "Bans the desired cranky member.\nRequires `Admin` set role, or `BAN_MEMBERS` permission.",
    usage : "<@user || User.ID> <Reason>",
    guildOnly : true,
    args : true,

    execute(message, args){
        bot = message.client;
        admin = false;
        staff = false

        settings = require(bot.g.get(message.guild.id));
        if(settings.admin) admin = true;
        if(settings.staff) staff = true;

        if(!admin && !staff && !message.member.permissions.has("BAN_MEMBERS") && message.author.id != message.guild.ownerid) return message.reply("You require either the servers `ADMIN` role, or `BAN_MEMBERS` permission to Ban members.");

        if(!message.guild.members.get(message.client.id).permissions.has("KICK_MEMBERS")) return message.reply("I require the `KICK_MEMBERS` permission to Ban somebody!!\nYou can by selecting the user in question and tap `Ban Member`");

        if(args.length == 0 || !message.mentions.members) return message.reply(`Please mention a user to ban.\n\`${settings.prefix}ban <@user> <reason>\``);
        if(args.length <= 1) return message.reply(`Please provide a reason for banning ${message.mentions.members.first().user.tag}`);
        
        member = message.mentions.members.first();
        removeMember = args.shift();
        if(!message.guild.members.get(member.id)) return message.reply(`There's no user on this server with an \`id\` of \`${member.id}\``);

        message.guild.members.get(member.id).ban(`Banned by "${message.author.tag} for ${args}`);
    }
};