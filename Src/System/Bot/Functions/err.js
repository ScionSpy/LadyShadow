discord = require('discord.js');

module.exports = {
    coded : "2019-04-05",
    name : "err",
    description : "Send Errors to channel in embed format.",
    usage : "bot.functions.get(`err`).execute(err)",

    execute(message, err){
        bot = message.client;

        const embed = new discord.RichEmbed()
          .setTitle("Whoops!! That's an Error!!")
          .setThumbnail("https://discordapp.com/channels/416906584900239370/485977097358278659/563971234866659339")
          .setColor("ff0000")
          .setDescription(`\`\`\`xl\n${err}\`\`\``)

        time = bot.functions.get("date").execute(Date.now());
        if(message.guild){
        console.log(`\n----------\n\n${time}\n--${message.guild.name} (${message.guild.id}\n--${message.author.tag} (${message.author.id})\n----${message.content}\n------${err}\n`);
        } else {
          console.log(`\n----------\n\n${time}\n--${message.author.tag} (${message.author.id})\n----${message.content}\n------${err}\n`);
        }

        console.error(err);
        return embed;
    }
};

//Make an array collection of err msgs in Images for this.Thumbnail.;
