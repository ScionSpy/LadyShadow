const discord = require('discord.js');

module.exports = {
    coded : "2019-04-05",
    name : "modlog",
    description : "Makes posts to #ModLog",
    usage : "bot.functions.get(`modlog`).execute(type, reason, target, moderator)",
    
    execute(type, reason, target, mod) {

      //Get "Colors"
        switch(type.toLowerCase()){
            case("kick"):
            case("ban"):
            case("mute"):
              color = "0000ff";
            break;
            case("unban"):
            case("unmute"):
              color = "GREEN";
            break;
            default:
              color = "000001"
        };


      //Create the #ModLog embed.
        const embed = new discord.RichEmbed()
        .setAuthor(`${target.tag} (${target.id})\nCase [**]`, target.avatarURL)
        .setFooter(`${mod.tag} (${message.author.id})`, mod.avatarURL)
        .setColor(color)
        .addField("Type", type, true)
        .addField("Reason", reason, true)


        return embed;
    }
}