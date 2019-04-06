module.exports = {
    coded : "2019-04-03",
    name : "userStatus",

    execute(user, member, bot){

        o = [];
        i = [];
        d = [];
        of = [];
        s = [];
        data = [];

    //Grab the "Status Emojis" from the Support Server.
        emo = function(e){
            em = bot.guilds.get("416906584900239370").emojis;
    
            if(e == "o") return em.get("561649276682240009");
            if(e == "i") return em.get("561649673832759317");
            if(e == "d") return em.get("561649719978229791");
            if(e == "of") return em.get("561649770452484103");
        };

    //Learn what the Staff status's are and display that info into their Status "list".
        status = function(user, member){
            t = `${member.displayName}#${user.discriminator}`;
            switch(user.presence.status){
            case('online'):
                o.push(`${emo("o")} ${t}`);
            break;
            case('idle'):
                i.push(`${emo("i")} ${t}`);
            break;
            case('dnd'):
                d.push(`${emo("d")} ${t}`);
            break;
            case('offline'):
                of.push(`${emo("of")} ${t}`);
            break;
            default:
                s.push(`[-] ${t}`);
            };
        };

        status(user, member);

        if(o) list = data.concat(o);
        if(i) list = list.concat(i);
        if(d) list = list.concat(d);
        if(of) list = list.concat(of);
        if(s) list = list.concat(s);


        return data;
    }
}