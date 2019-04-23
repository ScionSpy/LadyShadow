discord = require('discord.js');

module.exports = {
    coded : "2019-04-22",
    name : "shop",
    description : "The NPC Shop/Market.",
    usage : "shop [id [buy/sell]]",

    execute(message, args){
        bot = message.client;
        shop = bot.srpg.shop;
        const {prefix} = bot.g.get(message.guild.id);
        const {shopListings} = bot.srpg.config;

        i = [];
        a = [];
        w = [];


      //Get [listings]
        shop.forEach(item => {
          //Do not show if on the "Hide" list
            if(item.hide) return;

            listing = `${item.id}) ${item.value}g || ${item.name}`;

            if(item.id.startsWith("i")) i.push(listing);
            if(item.id.startsWith("a")) a.push(listing);
            if(item.id.startsWith("w")) w.push(listing);
        });


      //If no [listing]
        if(i.length == 0) i.push("== [No Items being Sold] ==");
        if(a.length == 0) a.push("== [No Armour being Sold] ==");
        if(w.length == 0) w.push("== [No Weapons being Sold] ==");


      //If [listing] is greater than "25"
        if(i.size > shopListings) i.push(`\n\n== [${i.size - shopListings} Items Not Listed] ==\n [${prefix}srpg shop items] to view all items`);
        if(a.size > shopListings) a.push(`\n\n== [${a.size - shopListings} Armours Not Listed] ==\n [${prefix}srpg shop armour] to view all armour`);
        if(w.size > shopListings) w.push(`\n\n== [${w.size - shopListings} Weapons Not Listed] ==\n [${prefix}srpg shop weapons] to view all weapons`);


        e = new discord.RichEmbed();
        e.setTitle("S.RPG Shop");
        e.setColor("00ffff");
        e.setFooter(`${prefix}srpg shop <id> [buy/sell]`);

        e.addField("Items", `\`\`\`css\n• ${i.join(',\n• ')}\`\`\``);
        e.addField("Armour", `\`\`\`css\n• ${a.join(',\n• ')}\`\`\``);
        e.addField("Weapons", `\`\`\`css\n• ${w.join(',\n• ')}\`\`\``);


        message.channel.send(e);
    }
}
