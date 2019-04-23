
function newGuild(info) {
    file = {
            "comment-0" : "Base",
        "id" : `${info.id}`,
        "joined" : `${info.members.get(info.client.user.id).joinedAt}`,
        "icon" : `${info.iconURL}`,


            "comment-1" : "Misc",
        "prefix" : `${bot.config.gPrefix}`,
        "dmhelp" : `${bot.config.dmhelp}`,
        "color" : `${bot.config.color}`,


            "comment-2" : "Channels",
        "welcome" : "",
        "farewell" : "",
        "rift" : "",
        "modlog" : "",
        "chatlog" : "",

            "comment-3" : "Roles",
        "admin" : "",
        "moderator" : "",
        "staff":"",
        "muted":"",


            "comment-4" : "Messages",
        "wMsg":"",
        "fMsg":"",


            "comment-5" : "Moderation",
        "blacklist" : [],
        "censorWhitelist":[],
        "censor":[]
    };
    json = JSON.stringify(file);
    return json;
};


function user(info) {
    file = {

    };
    json = JSON.stringify(file);
    return json;
};


function srpgUser(info) {
    file = {

    };
    json = JSON.stringify(file);
    return json;
};



function srpgHouse(info) {
    file = {

    };
    json = JSON.stringify(file);
    return json;
};


function srpgFaction(info) {
    file = {

    };
    json = JSON.stringify(file);
    return json;
};

function functions(defaultType, info){
    type = defaultType;

    switch(type.toLowerCase()){
        case("newguild"):
            fs.writeFileSync(`./Src/System/Settings/Guilds/${info.id}.json`, newGuild(info));
        break;
        case("user"):

        break;
        case("srpgUser"):

        break;
        case("srpgHouse"):

        break;
        case("srpgFaction"):

        break;
    };
};


module.exports = {
    coded : "2019-04-23",
    name : "default",
    description : "Default Classes",
    usage : "bot.defaults.execute(defaultType, info)",

    execute(defaultType, info) {
        functions(defaultType, info)
    }
}
