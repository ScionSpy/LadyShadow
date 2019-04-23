module.exports = {
    coded : "2019-04-23",
    name : "ready",
    description : "`ready` event",
    usage : "bot.functions.get('ready').execute(bot)",

    execute(bot){
        bot.startup = `LadyShadow : {\n\ \ bot : {\n\ \ \ \ \ \ "Alpha" : "${bot.alpha}",\n\ \ \ \ \ "Guilds" : "${bot.guilds.size}",\n\ \ \ \ \ \ "Users" : "${bot.users.size}",\n\ \ \ \ \ \ \ "Cmds" : "${bot.cmds.size}",\n\ \ "Srpg.Cmds" : "${bot.srpg.cmds.size}"\n\ \ },\n\ \ "Start" : "${bot.functions.get('date').execute(bot.readyTimestamp)}"\n}`;

        //Console Logging.
        console.log(`\n//----------\n\nSystem> Alpha = ${bot.alpha}\n\n`);
        if(bot.alpha) console.log(`System> LadyShadow~Alpha Ready.\n`);
        if(!bot.alpha) console.log(`System> LadyShadow Ready.\n`);

        console.log(bot.startup);


        //Set bot Presence
          //if(alpha) bot.user.setActivity(`as an Alpha.`, {type: "playing"});
        if(bot.alpha) bot.user.setActivity(`"..help" in Developer Mode.`, { type: "Streaming", url: 'https://www.twitch.tv/scion_spy%22%7D'})

        if(!bot.alpha) bot.user.setActivity(`in "${gPrefix}help"`, {type: "playing"});

        /**
         * [0] Playing
         * • {type: ' '}
         * [1] Streaming
         * • {type: ' ', url: ' '}
         * [2] Listening
         * • {type: ' '}
         * [3] Watching
         * • {type: ' '}
        */


       bot.functions.get("onCheck").execute(bot);
    }
};
