module.exports = {
    coded : "2019-04-05",
    name : "kick",
    aliases : ["boot"],
    description : "Kicks the desired cranky member.\nRequires `Moderator` set role, or `KICK_MEMBERS` permission.",
    usage : "<@user || User.ID> <Reason>",
    guildOnly : true,
    args : true,

    execute(message, args){
        bot = message.client;

      //ModLog setting
        type = "Kick";

        admin = false;
        moderator = false;
        staff = false;

        settings = bot.g.get(message.guild.id);
        if(settings.admin) admin = true;
        if(settings.moderator) moderator = true;
        if(settings.staff) staff = true;

        if(!admin && !moderator && !staff && !message.member.permissions.has("KICK_MEMBERS") && message.author.id != message.guild.ownerid) return message.reply("You require either the servers `MODERATOR` role, or `KICK_MEMBERS` permission to Kick members.");

        if(!message.guild.members.get(message.client.user.id).permissions.has("KICK_MEMBERS")) return message.reply("I require the `KICK_MEMBERS` permission to Kick somebody!!\nYou can by selecting the user in question and tap `Kick Member`");

        if(args.length == 0 || !message.mentions.members) return message.reply(`Please mention a user to kick.\n\`${settings.prefix}kick <@user> <reason>\``);
        if(args.length <= 1) return message.reply(`Please provide a reason for kicking ${message.mentions.members.first().user.tag}`);

        member = message.mentions.members.first();
        removeMember = args.shift();
        reason = args.join(' ');
        if(!message.guild.members.get(member.id)) return message.reply(`There's no user on this server with an \`id\` of \`${member.id}\``);

        message.guild.members.get(member.id).kick(`Kicked by "${message.author.tag}" for ${reason}`)
            .then(msg => {
                ch = message.channel;
                if(settings.modlog) ch = message.guild.channels.get(settings.modlog);

              //get modLog
                embed = bot.functions.get("modlog").execute(type, reason, member.user, message.author);

                ch.send(embed);
            })
            .catch(err => {
                message.channel.send(bot.functions.get("err").execute(message, err));
            });
    }
};
