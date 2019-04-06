module.exports = {
  coded : "2019-04-02",
  name : "newUser",
  
  execute(message, args) {
    file = {
      "id": `${message.author.id}`,
      "name": `${args[0]}`,
      "bal" : 0,
      "stats": {
        "hp": 0,
        "energy": 0,
        "mana": 0,
        "comment1": "Strength, Defence, Dextirety, Regeneration",
        "str": 0,
        "def": 0,
        "dex": 0,
        "reg": 0,
        "comment2": "npcKills, playerKills, Deaths",
        "cKills": 0,
        "xKills": 0,
        "deaths": 0
      },
      "gear": {
        "head": "",
        "chest": "",
        "legs": "",
        "feet": "",
        "necklace": "",
        "tabard": "",
        "ring1": "",
        "ring2": ""
      },
      "misc": {
        "status": "pre-registered",
        "relationship": {
          "type": "single",
          "partner": "",
        },
        "lp": {
          "users": [],
          "points": []
        },
        "house": {
          "name": "",
          "id": ""
        },
        "guild": {
          "name": "",
          "id": ""
        },
        "other": {
          "legacy": false,
          "started": false
        }
      }
    };
    return file;
  }
};