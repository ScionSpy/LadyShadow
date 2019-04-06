/*
 * {HSF}LadyShadow#7111
 *  v.3.0.0
 *  Feburary 25'th, 2019
 *  Devd by : ScionSpy & Bejebjay
*/

const token = require('.././tokens.json').LadyShadow;
const { ShardingManager } = require('discord.js');

const shard = new ShardingManager('./Src/shadow.js', { token: token,
  respawn: true
});

shard.spawn();
shard.on('launch', shard => console.log(`Launched shard ${shard.id + 1}`));