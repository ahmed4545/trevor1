const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome");

const developers = ["533687343480307733"]
var PrEfix = "nn";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(PrEfix + 'g')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (PrEfix + "leave")) {
    message.guild.leave();   
  } else  
  if (message.content.startsWith(PrEfix + 'w')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(PrEfix + 'l')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(PrEfix + 's')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(PrEfix  + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
  if (message.content.startsWith(PrEfix + 'setprefix')) {
  client.user.setPrefix(argresult).then
      message.channel.send(`Changing Prefix ..**${argresult}** `)
} else
if (message.content.startsWith(PrEfix + 'avatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}

});

client.login(process.env.BOT_TOKEN);
