const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"


console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
});
 const devs = ['389090790984515594','337629134371160065'];
const adminprefix = "-"



client.on("ready", () => {
    client.user.setPresence({ game: { name: `Alpha codes` }, type: 0 });
    console.log("BOT WORKER I LOVE YATO");
});

const code = '-';

client.on('message',async message => {
    if(message.content.startsWith(code + "js")) {
  if(!message.channel.guild) return message.reply(' ');
    let rank = message.guild.member(message.author).roles.find('name', '⇒ Support');
    if (!rank) return message.channel.send(':octagonal_sign: **| يجب ان تمتلك رتبة سبورت  لأستخدام هذا الأمر.**');
    let jscodes = message.guild.channels.find(`name`, "✻-discord-js");
    if(!jscodes) return message.channel.send(":x:لم اجد الروم الخاص بنشر الاكواد");
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':pencil: **| من فضلك اكتب الكود الأن... :pencil2: **').then(msg => {
  
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        let boi;
        msg.edit(':scroll: **| من فضلك اكتب وصف الكود الأن... :pencil2: **').then(msg => {
  
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              boi = collected.first().content;
              let boi2;
              msg.edit(':man_in_tuxedo: **| من فضلك اكتب من صنع هذا الكود الأن... :pencil2: **').then(msg => {
  
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                  collected.first().delete();
                boi2 = collected.first().content;
        msg.edit(':shield: **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');
   message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
            msg.edit(':dove: **| Done :white_check_mark:, تم بنجاح نشر كودك في روم الاكواد**');
            collected.first().delete();
            jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**Code Alpha© :arrow_down:**            
\`\`\`js
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`); 
          }
        }
    );
});
      });
    }
      );
    });
}
);
      })}});
const ytdl = require('ytdl-core');
const request = require('request');
const Canvas = require("canvas");
const fs = require("fs");
const jimp = require("jimp");
const moment = require("moment")


client.on('ready', function(){	
    var ms = 200000 ;	
    var setGame = ['Alpha Codes!','الفا كود','الفا سيرفر'];	
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setGame(setGame[i],`http://www.youtube.com/AlphaCodes!`);	
}, ms);	
	
}); 

  client.on('message', message => {
if(message.content == '<@478601713020960798>') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 50000);
}
});

  client.on('message', message => {
if(message.content == 'جاكيو') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 50000);
}
});


client.on("message", function(message) {
let messageArray = message.content.split(" ");
let command = messageArray[0];
let anarg = message.content.split(" ").join(" ").slice(2);
let toSend = message.mentions.users.first();
        
         var currentTime = new Date(),
          hours = currentTime.getHours() + 2 ,
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds(),
          Year = currentTime.getFullYear() - 2000,
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();
          var suffix = 'AM';
          if (hours >= 12) {
             suffix = 'PM';
              hours = hours - 12;
         }
          if (hours == 0) {
              hours = 12;
          }
let Jackeo = new Discord.RichEmbed()
    .setColor("RANDOM")
    //.setAuthor(message.author.username,message.author.avatarURL)
    //.setThumbnail(message.author.avatarURL)
    //.setFooter("Alpha Codes. ")
    .addField("** Msg :mailbox_with_mail: **","**"+anarg+"**")
.setFooter(`Alpha Codes.`, 'https://i.imgur.com/mpztoDJ.png')    
var prefix = "-";
if(command === `${prefix}send`) {
  if(!message.channel.guild) return message.reply(' ');
    if(toSend.bot) return message.reply("** لا يمكنك ارسال رسالة لبوت** :robot: ");
    if(anarg < 1) return message.reply("** من فضلك ، حدد حجج صحيحة!** :writing_hand::skin-tone-1: ");
    if(toSend === message.author) return message.reply("** لا يمكنك إرسال رسالة إلى نفسك**:couple:");
    toSend.send({embed:Jackeo});
    message.reply("** ✅ , ارسلت الرسالة ل **<@"+toSend.id+">")
 }
});


/* النسخة التوب
client.on("message", function(message) {
let messageArray = message.content.split(" ");
let command = messageArray[0];
let anarg = message.content.split(" ").slice(2);
let toSend = message.mentions.users.first();
        
         var currentTime = new Date(),
          hours = currentTime.getHours() + 2 ,
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds(),
          Year = currentTime.getFullYear() - 2000,
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();
          var suffix = 'AM';
          if (hours >= 12) {
             suffix = 'PM';
              hours = hours - 12;
         }
          if (hours == 0) {
              hours = 12;
          }
let Jackeo = new Discord.RichEmbed()
    .setColor("RANDOM")
    //.setAuthor(message.author.username,message.author.avatarURL)
    //.setThumbnail(message.author.avatarURL)
    //.setFooter("Alpha Codes. ")
    .addField("** Msg :mailbox_with_mail: **","**"+anarg+"**")
.setFooter(`Alpha Codes.`, 'https://i.imgur.com/mpztoDJ.png')    
var prefix = "-^";
if(command === `${prefix}send`) {
    if(toSend.bot) return message.reply("** لا يمكنك ارسال رسالة لبوت** :robot: ");
    if(anarg < 1) return message.reply("** من فضلك ، حدد حجج صحيحة!** :writing_hand::skin-tone-1: ");
    if(toSend === message.author) return message.reply("** لا يمكنك إرسال رسالة إلى نفسك**:couple:");
    toSend.send({embed:Jackeo});
    message.reply("** ✅ , ارسلت الرسالة ل **<@"+toSend.id+">")
 }
}); */


/*
client.on("message", function(message) {
let messageArray = message.content.split(" ");
let command = messageArray[0];
let anarg = message.content.split(" ").slice(2);
let toSend = message.mentions.users.first();
        
         var currentTime = new Date(),
          hours = currentTime.getHours() + 2 ,
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds(),
          Year = currentTime.getFullYear() - 2000,
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();
          var suffix = 'AM';
          if (hours >= 12) {
             suffix = 'PM';
              hours = hours - 12;
         }
          if (hours == 0) {
              hours = 12;
          }
let xFive = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username,message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setFooter("SenioR TeaM. || "+"- "+Month+"."+Year+"."+Day+" -"+hours+":"+minutes+" "+suffix)
    .addField("**• الرسالة**","**"+anarg+"**")
    .addField("**• المرسل**","<@"+message.author.id+">")
    .addField("**• التاريخ**",Day+"/"+Month+"/"+Year+" | "+hours+":"+minutes+":"+seconds+" "+suffix)
var prefix = "-^";
if(command === `${prefix}send`) {
    if(toSend.bot) return message.reply("**# You cannot send a message to a bot!** 🎇");
    if(anarg < 1) return message.reply("**# Please , Specify a valid arguments!** 🎇");
    //if(toSend === message.author) return message.reply("**# You cannot send a message to yourself**");
    toSend.send({embed:xFive});
    message.reply("** ✅ , Sent a Message to **<@"+toSend.id+">")
 }
}); */


/*
client.on('ready', function(){	
    var ms = 200000 ;	// السرعة لا  تغيرها عشان ما تتبند 
    var prefix = "حط البرفركس هنا"; 
    var setGame = [`المستخدمين : ${client.users.size}`,`${prefix}help`,`االسيرفرات : ${client.guilds.size}`];	// لا تلعب بشيء
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setGame(setGame[i],`http://www.youtube.com/AlphaCodes!`);	// حقوقنا فضلا اتركها وشائنها
}, ms);	
	
}); */

  client.on('message', message => {

    if (message.content === "user") {

    let embed = new Discord.RichEmbed()

.addField('**user**: ' , message.guild.memberCount)
.setColor("RANDOM")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});
  



client.on("message", (message) => {
           if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
     let jackeo = new Discord.RichEmbed()
            .setTimestamp()
                .setTitle("هذة ارسل للبوت رسالة")
                .addField(`من:`, `<@${message.author.id}>`)
                    .setColor("RANDOM")
                   .setThumbnail(message.author.displayAvatarURL)
                   .addField(`الرسالة: `, `\n\n\`\`\`${message.content}\`\`\``)
                  .setFooter(`DM ALPHA | `)
               client.users.get("389090790984515594").send(jackeo)
         }
});

 // client.on('message', function(message) {
 //  //     if (message.channel.type === "dm") {
   //       if (message.author.id === client.user.id) return;
      //    var iiMo = new Discord.RichEmbed()
      //    .setColor('RANDOM')
     //     .setTimestamp()
      //    .setTitle('``هذة الشخص قام بالكتابة !``')
       //   .setThumbnail(`${message.author.avatarURL}`)
      //    .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
     //     .setFooter(`From **${message.author.tag} (${message.author.id})**`)
   //   client.channels.get("439419246942879744").send({embed:iiMo});
  //    }
 // });

client.on('ready',async () => {
setInterval(function(){
var currentTime = new Date(),
Year  = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
day   = currentTime.getDate() 

//client.channels.find('id', '480872188887695370').setName(`『 الأعضاء ↩ ${guild.memberCount} 』`)
client.channels.find('id', '489540332502122507').setName(`『 التاريخ ↩ ${Year}/${Month}/${day} 』`)
}, 5000); 

});


client.on("guildMemberAdd", (member) => {
client.channels.get('480872188887695370').edit({name : `『 الأعضاء ↩ ${member.guild.memberCount} 』`});
})
client.on("guildMemberRemove", (member) => {
client.channels.get('480872188887695370').edit({name : `『 الأعضاء ↩ ${member.guild.memberCount} 』`});
})




//${client.users.size}
//${guild.memberCount}
//${message.guild.memberCount}
client.on('message',message =>{
  if(!message.channel.guild) return message.reply(' ');
    var prefix = "-";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://i.imgur.com/gfqiPnJ.png")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });



client.on('message', message => {
var prefix = "-";
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم بنجاح تغيير الاسم ?`)
  return message.reply("**تم تغيير الاسم البوت بنجاح ?**");
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير صورة البوت بنجاح ?`);

}
});

client.on('message', message => {
var prefix = "-";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say")  {
   if(!message.channel.guild) return message.reply(' ');
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "emb")    {
  if(!message.channel.guild) return message.reply(' ');
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/حب بلا حدود");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });




client.on('message', message => { 
	var prefix ="-";
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
        .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)                 
    .setDescription(`** ايديك: ${message.author.id}  **`)
    .setFooter(`الفا كودي`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });




client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "-";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Alpha Codes";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
message.channel.send(`**__عضو__ ${message.guild.members.size}  تم ارسال البروكسدات الى | ☑ **`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField(':copyright: السيرفر', message.guild.name)
       .addField(':loudspeaker: ارسلها', message.author.username)
       .addField(':mailbox: الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
    
    
    
    
    
    
    
    
client.on('message', message => {
if (message.content.startsWith("-uptime")) {
    if(!message.channel.guild) return message.reply(' ');
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});



const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";


client.on('message', message => {
	if(message.content.startsWith('القرآن')) {
  if(!message.channel.guild) return message.reply(' ');
		message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);

	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("  بوت القرآن | نسخة ألفا  ", 'https://i.imgur.com/CLwmKV9.png')
      .setDescription(` **
     🕋 أوامر بوت القرآن الكريم 🕋
      
     1⃣ ألقران الكريم كامل بصوت الشيخ عبد الباسط عبد الصمد
     2⃣ ألقران الكريم كامل بصوت الشيخ ياسر الدوسري  
     3⃣ ألقران الكريم كامل بصوت الشيخ ماهر المعيقلي
     🚫 _Stop_
     4⃣ ألقران الكريم كامل بصوت الشيخ فارس عباد
     5⃣ ألقران الكريم كامل بصوت الشيخ هزاع البلوشي ** `)
	
	message.channel.sendEmbed(embed).then(msg => {
			msg.react('1⃣')
		.then(() => msg.react('2⃣'))
		.then(() => msg.react('3⃣'))
		.then(() => msg.react('🚫'))
		.then(() => msg.react('4⃣'))
		.then(() => msg.react('5⃣'))
		.then(() => msg.react('6⃣'))
        
// Filters		
	let filter1 = (reaction, user) => reaction.emoji.name === '1⃣' && user.id === message.author.id;
	let filter2 = (reaction, user) => reaction.emoji.name === '2⃣' && user.id === message.author.id;
	let filter3 = (reaction, user) => reaction.emoji.name === '3⃣' && user.id === message.author.id;
	let filter4 = (reaction, user) => reaction.emoji.name === '🚫' && user.id === message.author.id;
	let filter5 = (reaction, user) => reaction.emoji.name === '4⃣' && user.id === message.author.id;
	let filter6 = (reaction, user) => reaction.emoji.name === '5⃣' && user.id === message.author.id;
	let filter7 = (reaction, user) => reaction.emoji.name === '6⃣' && user.id === message.author.id;

// Collectors
	let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
	let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
	let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
	let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
	let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
	let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
	let collector7 = msg.createReactionCollector(filter7, { time: 120000 });
	
// Events
collector1.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
   });
});
collector2.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=TFm4fCZA7i0", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector3.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector4.on('collect', r => {
	if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم إيقاف القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
});
collector5.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=hqm9fasXauU", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector6.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=KvhNdMSgBGM", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector7.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
})
}
});




client.on('message' , async (message) => {
 if (message.content.startsWith('-info-bot')) {
    if(!message.channel.guild) return message.reply(' ');
 const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);

    var ping = client.ping
    message.channel.send(`\n= Memory usage: ${Math.round(used * 100) / 100}MB\n= Ping: ${ping}\n= Uptime: Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${realTotalSecs}\n= Node: ${process.version}\n= Library: discord.js\n= ARCH: ${arch}\n= Plataform: ${os.platform}\n= Servers: ${client.guilds.size}\n= Users: ${client.users.size}`, {
        code: 'AsciiDoc'
    })

}
});




client.on('message', async message =>{

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let sicon = message.author.displayAvatarURL;
  if(cmd === `myid`) {
      var bots = new Discord.RichEmbed()

      .setDescription(`** Your id: ${message.author.id}  **`)
      .setColor('RANDOM')
      message.channel.send(bots);
  }
});

client.on('message', async message =>{

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let prefix = '-';
  let sicon = message.author.displayAvatarURL;
  if(cmd === `${prefix}help`) {
      var bots = new Discord.RichEmbed()

      .setDescription(`**  
      ╭━━━┳╮╱╱╱╭╮╱╱╱╱╱╭━━━╮╱╱╱╱╭╮
      ┃╭━╮┃┃╱╱╱┃┃╱╱╱╱╱┃╭━╮┃╱╱╱╱┃┃
      ┃┃╱┃┃┃╭━━┫╰━┳━━╮┃┃╱╰╋━━┳━╯┣━━┳━━╮
      ┃╰━╯┃┃┃╭╮┃╭╮┃╭╮┃┃┃╱╭┫╭╮┃╭╮┃┃━┫━━┫
      ┃╭━╮┃╰┫╰╯┃┃┃┃╭╮┃┃╰━╯┃╰╯┃╰╯┃┃━╋━━┃
      ╰╯╱╰┻━┫╭━┻╯╰┻╯╰╯╰━━━┻━━┻━━┻━━┻━━╯
      ╱╱╱╱╱╱┃┃
      ╱╱╱╱╱╱╰╯
      
      _─══════ {✯Alpha Codes✯} ══════─_
          __الاوامرالخاصة__:spy::skin-tone-1: 
      \`\`-js\`\` | امرنشر الاكوادر فقط للسبورت بلس
          \`\`-تقديم\`\` |
     \`\-قبول\`\` |
               \`\`-رفض\`\` |

      \`\`-^ قريبا\`\` |
      \`\`-^ قريبا\`\` |
      
      ∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞
      __الاوامر العامة__:tools: 
      \`\`-uptime\`\`   | لتعرف متا اشتغل البوت
      \`\`-info-bot\`\` | معلومات عن البوت 
      \`\`-id\`\` |   لاضهار معلومات عن انشاء حسابك ودخولك للسيرفر ولمعرفة ايدي حسابك 
      \`\`-top\`\`|لروئية عدد الاعضاء الذين اتو بالروابط
      \`\`-myid \`\`| لمعرفة ايديك
      \`\`-invbot\`\` |لاضافة البوت لسيرفرك
      \`\`القرآن\`\`    | لتشغيل القران الكريم
      __الاوامر فقط للسيرفرات __:no_entry: :no_entry_sign: 
      
 
      ∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞
      __اوامر صاحب البوت__:cherry_blossom: 
      \`\`-ls\`\`  | امر الستنج / امر الاستماع
      \`\`-ply\`\` | امر البليانج
      \`\`-wt\`\`  | امر الوتشنج 
      \`\`-st\`\`  | امر الستريمنج
      \`\`-restart\`\`| امر الريستارت
      \`\`-bc\`\`| امر البروكسدات
      
        _─══════ {✯Alpha Codes✯} ══════─_
      **`)
      .setColor('RANDOM')
      message.channel.send(bots);
  }
});


client.on('message', message => {
if (message.content === "-help") {
message.react("✅")

}
});


client.on('message', message => {
if (message.content === "-help") {
message.react("📩")

}
});

      client.on('message', async rokz => {
    if(rokz.content.startsWith(prefix + "تقديم")) {
      let lang = '';
      let time = '';
      let expe = '';
      let fillter = m => m.author.id === rokz.author.id
      await rokz.channel.send("ما لغتك ؟").then(e => {
     rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
     .then(co => {
       lang = co.first().content;
        co.first().delete();

       e.edit(`خبرتك
[${lang}]`)
       rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
       .then(col => {
         time = col.first().content;
          col.first().delete();

            e.edit(`فرق بين const and var
[${time}]
[${lang}]`)
            rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
            .then(coll => {
              expe = coll.first().content;
               coll.first().delete();

               e.edit(`جاري تقديمك...
[${expe}]
[${time}]
[${lang}]`)
              let rokzz = rokz.guild.channels.find("name","submite-list")
              setTimeout(() => {
                e.edit("تم التقديم")
              }, 3000)
              rokzz.send(`
                تقديم من ${rokz.author}

  اللغه:
  \`${lang}\`
  المده:
  \`${time}\`
  الخبره:
  \`${expe}\`
                `).then(rokzzz => {
                  rokzzz.react("✅")
                  rokzzz.react("❌")
                })
            })
       })
     })
   })
    }
  })
 
    
    client.on('message',async message => {
let mention = message.mentions.members.first();
let Room = client.channels.get('');
if(message.content.startsWith(prefix + "رفض")) {
if(message.guild.id !==  '488858291544522753') return;
 if (!message.member.hasPermission("MANAGE_ROLES"))  return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));

if(!mention) return message.reply("منشن شخص");

var embed = new Discord.RichEmbed()
.addField('» تم رفض', `${mention}`,true)
.addField('» بواسطة', `${message.author}`,true)
Room.send(embed);
}
});
  client.on('message',async message => {
let mention = message.mentions.members.first();
let Room = client.channels.get('');
if(message.content.startsWith(prefix + "قبول")) {
if(message.guild.id !==  '488858291544522753') return;
 if (!message.member.hasPermission("MANAGE_ROLES"))  return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));

if(!mention) return message.reply("منشن شخص");

var embed = new Discord.RichEmbed()
.addField('» تم قبول', `${mention}`,true)
.addField('» بواسطة', `${message.author}`,true)
Room.send(embed);
}
});
    
    

client.login(process.env.BOT_TOKEN);
