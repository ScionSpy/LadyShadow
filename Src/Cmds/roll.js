module.exports = {
    coded : "2019-03-24",
    name : "roll",
    description : "Get a random number between 1 and 6.",

    args : false,

    execute(message){
        let num = Math.floor(Math.random() * 6) + 1;
        message.channel.send(num);
    }
};