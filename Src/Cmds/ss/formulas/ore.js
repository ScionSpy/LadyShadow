discord = require('discord.js');

module.exports = {
    coded : "2019-04-22",
    name : "ore",
    description : "Calculate the minimum amnt of Ore will recover.",
    usage : "<MLS> <ORR> <HARD> [MPR]",

    async execute(message, args) {
        let MLS = 0;
        let MPR = 0;
        let ORR = 0;
        let SIZ = 0;
        let HARD = 0;
        let lost = 0;

        let msgID = "";
        let msg = [`__MLS (Mining Laser Strength)__`,`**Please Input your MLS**`];
        let err = function (err) {
            bot.functions.get('err').execute(message, err);
        };


        e = new discord.RichEmbed()
          .setTitle("SagaSpace - Ore")
          .setColor("00ffff")
          .setDescription(msg.join('\n'))

        message.channel.send(e)
        .then((post) => {
            msgID = post.id;

            message.channel.awaitMessages(response => response.author.id === message.author.id, {
                max: 1,
                time: 30000,
                errors: ['time'],
            })
            .then((collected) => {
                MLS = collected.first().content;
                collected.first().delete();
                del = msg.pop();
                msg.push(`MLS = ${MLS}`);
                msg.push(`\n__MPR (Mining Precision)__`)
                msg.push(`**Please enter your MPR**\n*• If none, enter \`0\`*`);

                e.setDescription(msg.join('\n'));
                message.channel.messages.get(msgID).edit(e)
                .then(() => {
                    message.channel.awaitMessages(response => response.author.id === message.author.id, {
                        max: 1,
                        time: 30000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        MPR = collected.first().content;
                        collected.first().delete();
                        del = msg.pop();

                        msg.push(`MPR = ${MPR}`);
                        msg.push(`\n__ORR (Ore Recovery Rate)__`)
                        msg.push(`**Please enter your ORR**`);

                        e.setDescription(msg.join('\n'));
                        message.channel.messages.get(msgID).edit(e)
                        .then(() => {
                            message.channel.awaitMessages(response => response.author.id === message.author.id, {
                                max: 1,
                                time: 30000,
                                errors: ['time'],
                            })
                            .then((collected) => {
                                ORR = collected.first().content;
                                collected.first().delete();
                                del = msg.pop();
                                msg.push(`ORR = ${ORR}`);
                                msg.push(`\n__SIZ (Meteor Size)__`)
                                msg.push(`**Please enter the Meteor's Size**`);

                                e.setDescription(msg.join('\n'));
                                message.channel.messages.get(msgID).edit(e)
                                .then(() => {
                                    message.channel.awaitMessages(response => response.author.id === message.author.id, {
                                        max: 1,
                                        time: 30000,
                                        errors: ['time'],
                                    })
                                    .then((collected) => {
                                        SIZ = collected.first().content;
                                        collected.first().delete();
                                        del = msg.pop();
                                        msg.push(`SIZ = ${SIZ}`);
                                        msg.push(`\n__HARD (Meteor Hardness)__`)
                                        msg.push(`**Please enter the Meteor's Hardness**`);

                                        e.setDescription(msg.join('\n'));
                                        message.channel.messages.get(msgID).edit(e)
                                        .then(() => {
                                            message.channel.awaitMessages(response => response.author.id === message.author.id, {
                                                max: 1,
                                                time: 30000,
                                                errors: ['time'],
                                            })
                                            .then((collected) => {
                                                HARD = collected.first().content;
                                                collected.first().delete();
                                                del = msg.pop();
                                                msg.push(`HARD = ${HARD}`);

                                                e.setDescription(msg.join('\n'));
                                                message.channel.messages.get(msgID).edit(e);

                                              //Time to do the MATH
                                                Ore = (MLS -HARD) +1;
                                                //Ore = MLS + 1 - HARD;
                                                //message.channel.send(`MLS + 1 - HARD = ${Ore}`)

                                                if(Ore > 0 && Ore > ORR){
                                                    if(MPR){
                                                        if(MLS > ORR) {
                                                            for(MPR; MLS > ORR;){
                                                                console.log("FOR")
                                                                if(MLS > ORR) return
                                                                console.log("FOR-2")
                                                                MPR = MPR -1;
                                                                MLS = MLS -1;
                                                            };
                                                        };
                                                    };
                                                };

                                                if(Ore > ORR) lost = Ore - ORR;
                                                if(lost > 0) LOST = `\n\ \ \ \ \ Ore Lost : ${lost}`;
                                                if(lost <= 0) LOST = "";

                                                e.setDescription(`\`\`\`css\n[Data]\nMLS : ${MLS} | MPR : ${MPR} | ORR : ${ORR} | SIZ : ${SIZ} | HARD : ${HARD}\`\`\`\`\`\`css\n[Result]\nMinimum Mined : ${Ore}\n \ \ \ Recovered : ${ORR}${LOST}\`\`\``);
                                                message.channel.send(e);


                                            })
                                            .catch((e) => {
                                                err(e);
                                            });
                                        });
                                    })
                                    .catch((e) => {
                                        err(e);
                                    });
                                });
                            })
                            .catch((e) => {
                                err(e);
                            });
                        })
                        .catch((e) => {
                            err(e);
                        });
                    })
                    .catch((e) => {
                        err(e);
                    });
                });
            });
        });
    }
}
