const Discord = require('discord.js');
 const client = new Discord.Client();
console.log('mhstr');
client.on('message', message => {
if (message.content === '+') {
 if (message.author.id !== '461235098201620491') return message.react('');
const channel = message.member.voiceChannel;
channel.join().then(connection => console.log('Connected')).catch(console.error);
}
});
client.login(process.env.BOT_TOKEN);
