module.exports = {
    coded : "2019-04-22",
    name : "test",
    description : "a test cmd for the owners",
    owner : true,
    easterEgg : true,

    execute (message, args){
        message.channel.send("Testing 5");
    }
}
