const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome");

var PrEfix = "nn";
client.on('message', message => {
  if (!message.content.startsWith(PrEfix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '533687343480307733') return;
if (message.content.startsWith(PrEfix + 'w')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`اهه`)
} else 
if (message.content.startsWith(PrEfix + 'p')) {
client.user.setActivity(argresult, {type:'PLAYING'});
    message.channel.sendMessage(`اهه`)
} else 
if (message.content.startsWith(PrEfix + 'l')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`اهه`)
} else 
if (message.content.startsWith(PrEfix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`اهه`)
}

});

client.login(process.env.BOT_TOKEN);
