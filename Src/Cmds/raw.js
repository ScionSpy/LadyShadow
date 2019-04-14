const fs = require("fs");

module.exports = {
    name: 'raw',
    aliases: ['code'],
    description: "Shows a provided commands `raw` code.",
    usage: "Main = <cmd>\nSubCmd = <path> <cmd>\n`/` in [path] are not required.",
    args: true,
    owner: true,

    execute(message, args) {
        path = `Src/Cmds/${args}.js`
        if(args.length >= 1) path = `Src/Cmds/${args.join('/')}.js`;
        const codeFile = fs.readFileSync(path, "utf-8");

        if (!codeFile) return message.channel.send("That command does not exist.");
        const code = String(codeFile);

        message.channel.send(code, {code: "js", split: true});
    },
};
