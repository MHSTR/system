const {Client} = require('discord.js')
const client = new Client()
.on('ready',  () => {
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





const config = require('./configs.json');


const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {        
    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
        .catch(console.error);
        
    
    
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}



client.on('ready', () => {
  console.log('Bot Is Online')
  if(config.speed <10000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});
client.login(process.env.BOT_TOKEN);
