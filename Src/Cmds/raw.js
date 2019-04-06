const fs = require("fs");

module.exports = {
    name: 'raw',
    aliases: ['code'],
    description: "Shows a provided commands `raw` code.\nMain Shadow cmds only.",
    usage: "<cmd>",
    args: true,
    owner: true,

    execute(message, args) {
        const codeFile = fs.readFileSync(`./src/commands/${args[0]}.js`, "utf-8");
        
        if (!codeFile) return message.channel.send("That command does not exist.");
        const code = String(codeFile);

        message.channel.send(code, {code: "js", split: true});
    },
};