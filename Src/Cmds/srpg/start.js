module.exports = {
    coded : "2019-03-24",
    name : "start",
    description : "Registers your Shadow RPG account.",

    guildOnly : true,

    execute(message, args, srpg){
        fs = require('fs');
        bot = message.client;
        prefix = bot.g.get(message.guild.id).prefix;
        let user = srpg.users.get(message.author.id);

        if(args.length == 0 && !user) return message.reply(`\nYou must include some information \*~\*\n• Starting New? \`${prefix}srpg start <DisplayName>\`\n• Confirming an S.RPG account? \`${prefix}srpg start <DisplayName> confirm\`\n• Other? \`Contact an S.Rpg Admin\``);
        

        if(!user){
            message.channel.send(`Creating an S.RPG account with the following information:\`\`\`css\n\ Name : ${args[0]}\n\ \ \ ID : ${message.author.id}\nHouse : ${message.guild.name}\n\ \ \ ID : ${message.guild.id}\`\`\`To start your adventure run:\`\`\`css\n${prefix}srpg start confirm\`\`\``);
            const newUser = bot.srpg.functions.get('newUser').execute;
            
            fs.writeFileSync(`Src/System/Srpg/Users/${message.author.id}.json`, JSON.stringify(newUser(message, args)));
            user = `../.././System/Srpg/Users/${message.author.id}.json`;
            if(!user) return message.reply(`\`ERROR\` \`\`\`css\nThere was an Error while creating your S.RPG account!!\`\`\`\nProvide the following to an S.RPG Admin so we can see if the Error is code related.\`\`\`css\nType : S.RPG-Create\nTime : ${message.createdTimestamp}\n\n\ \ ID : ${message.author.id}\nName : ${args[0]}\`\`\``);
            bot.collections.get('srpg.users').execute(bot, fs);
            if(!srpg.users.get(message.author.id)) return message.reply(`\`ERROR\` \`\`\`css\nThere was an Error while saving your User Profile to the S.RPG!!\`\`\`\nProvide the following to an S.RPG Admin so we can see if the Error is code related.\`\`\`css\nType : S.RPG-Save\nTime : ${message.createdTimestamp}\n\n\ \ ID : ${message.author.id}\nName : ${args[0]}\`\`\``);
            return message.channel.send(`User : ${args[0]} created successfully.`);
        };


        if(user.misc.other.started == false && args[0] != "confirm") return message.reply(`You seem to already have an S.RPG acoount!!\`\`\`css\nName : ${user.name}\n\ \ ID : ${user.id}\`\`\`Type: \`${prefix}srpg start confirm\` to begin your adventure!!\n*(If you would like to change your \`S.RPG DisplayName\` use \`${prefix}srpg support\` and contact an \`@SRPG Admin\`)*`);
        
        if(user.misc.other.started == false && args[0] == "confirm") {
            oStatus = user.misc.other.started;
            nStatus = true;
            user.misc.other.started = nStatus;
            json = JSON.stringify(user);
            fs.writeFileSync(`./Src/System/Srpg/Users/${message.author.id}.json`, json);

            return message.channel.send(`:ocean::sailboat: Your on your way!! :wave:`)
        };

        if(user.misc.other.started == true && args[0] == "confirm") return message.reply(`You've already started your adventure!!\nIf you wish to start new, use \`${prefix}srpg support\` and contact an \`@SRPG Admin\` to delete or rename your avatar!`);

        if(user) return message.reply(`You've already started your adventure!!\`\`\`css\nName : ${user.name}\n\ \ ID : ${user.id}\`\`\`If you would like to delete your account and start new, use \`${prefix}srpg support\` and contact an \`@SRPG Admin\` about deleting your account.`);
        
    }
};