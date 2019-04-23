module.exports = {
    coded : "2019-04-13",
    name : "unban",
    description : "Unbans the desired Discord-User.\nRequires `Admin` set role, or `BAN_MEMBERS` permission.",
    usage : "<User.ID> <Reason>",
    guildOnly : true,
    args : true,

    help : "mod",

    execute(message, args){
        bot = message.client;

      //ModLog setting
        type = "Unban";

        admin = false;
        staff = false

        settings = bot.g.get(message.guild.id);
        if(settings.admin) admin = true;
        if(settings.staff) staff = true;

        if(!admin && !staff && !message.member.permissions.has("BAN_MEMBERS") && message.author.id != message.guild.ownerid) return message.reply("You require either the servers `ADMIN` role, or `BAN_MEMBERS` permission to Unban members.");

        if(!message.guild.members.get(message.client.user.id).permissions.has("BAN_MEMBERS")) return message.reply("I require the `BAN_MEMBERS` permission to unban anybody!!\nYou can by selecting the user in question and tap `Revoke Ban` in `ServerSettings>Bans>User`");

        if(args.length == 0) return message.reply(`Please provide a user-ID to unban.\n\`${settings.prefix}unban <user-ID> <reason>\``);
        if(args.length <= 1) return message.reply(`Please provide a reason for unbanning \`${args[0]}\``);

        member = args[0];
        removeMember = args.shift();
        reason = args.join(' ');
        let exists = false;
        let user = "";

      //get modLog
        message.guild.fetchBans()
            .then(ban => {
                ban.map(b => {
                    if(b.id != member) return;
                    if(b.id == member) exists = true;
                    if(exists != true) return message.channel.send(`:warning: There is no user banned with an ID-\`{member}\` :warning:`);

                    user = {
                        "id" : b.id,
                        "tag" : b.tag,
                        "avatarURL" : b.avatarURL
                    };
                });
            });


        if(exists == false) return;
        message.guild.unban(member, `Unbanned by "${message.author.tag}" for "${reason}"`)
            .then(msg => {
                message.react("👌");

                ch = message.channel;
                if(settings.modlog) ch = message.guild.channels.get(settings.modlog);

                embed = bot.functions.get('modlog').execute(type, reason, user, message.author);

                ch.send(embed);
            })
            .catch(err => {
                message.channel.send(bot.functions.get("err").execute(message, err));
            });
    }
};
