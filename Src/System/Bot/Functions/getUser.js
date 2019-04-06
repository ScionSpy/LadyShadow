module.exports = {
    coded : "2019-03-25",
    name : "getUser",


    execute(message, mention){
        function getUser(mention) {
            const matches = mention.match(/^<@!?(\d+)>$/);
            const id = matches[1];
        
            return message.client.users.get(id);
        };

        getUser(mention);
    }
};