module.exports = {
    coded : "2019-04-13",
    name : "hackban",
    description : "HackBans the desired Discord-User.\nRequires `Admin` set role, or `BAN_MEMBERS` permission.",
    usage : "<User.ID> <Reason>",
    guildOnly : true,
    args : true,

    execute(message, args){
        bot = message.client;

      //ModLog setting
        type = "Hack-Ban";

        admin = false;
        staff = false

        settings = bot.g.get(message.guild.id);
        if(settings.admin) admin = true;
        if(settings.staff) staff = true;

        if(!admin && !staff && !message.member.permissions.has("BAN_MEMBERS") && message.author.id != message.guild.ownerid) return message.reply("You require either the servers `ADMIN` role, or `BAN_MEMBERS` permission to hack-ban members.");

        if(!message.guild.members.get(message.client.user.id).permissions.has("BAN_MEMBERS")) return message.reply("I require the `BAN_MEMBERS` permission to Hack-ban somebody!!");

        if(args.length == 0) return message.reply(`Please provide a user-ID to hack-ban.\n\`${settings.prefix}hackban <user-ID> <reason>\``);
        if(args.length <= 1) return message.reply(`Please provide a reason for hack-banning \`${args[0]}\``);

        member = args[0];
        removeMember = args.shift();
        reason = args.join(' ');


        message.guild.ban(member, `Hack-Banned by "${message.author.tag}" for "${reason}"`)
            .then(msg => {
                message.react("👌");

                ch = message.channel;
                if(settings.modlog) ch = message.guild.channels.get(settings.modlog);

              //get modLog
                message.guild.fetchBans()
                .then(ban => {
                    ban.map(b => {
                        if(b.id != member) return;
                        embed = bot.functions.get('modlog').execute(type, reason, b, message.author);
                    });
                    ch.send(embed);
                });

            })
            .catch(err => {
                message.channel.send(bot.functions.get("err").execute(message, err));
            });
    }
};
