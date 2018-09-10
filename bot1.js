const {Client} = require('discord.js')
const client = new Client()
const RainClient = require("rainbow-role")
const rain = new RainClient(prefix, roleName, size, speed, logging)

//prefix (string) => البرفكس الي تبيه يكون للكوماند => default is "!"
//roleName (string) => اسم الرول الي تبيه يكون حق ال rainbow => default is "Rainbow"
//size (number) => كم عدد الالوان الي تبيه => default is 10
//speed(number) => سرعة ال rainbow بالثواني => default is 60
//logging(boolean ) => هل تبي يطلعلك بالكونسل لوق كل ما يتغير اللون؟ => default is false
 
//يمديك تستخدم اي من ال parmas في كودك ...

rain.rainbow(client) // على حسب , اذا كنت معرفه client او bot

client.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~Team #ALPHA  Bot~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  Team ALPHA  Bot " ] servers! [ " ${client.guilds.size} " ] Users! [ " ${client.users.size} " ]`); 

});


client.on("ready", () => {
    client.user.setPresence({ game: { name: `Disco Roles! Created by i am toast#1213` }, type: 0 });
    console.log("Disco role bot online! Created by i am toast.");
});



client.login(process.env.BOT_TOKEN);
