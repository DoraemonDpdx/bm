const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");
const client = require("../index");
const Discord = require(`discord.js`)
console.log(`[🔑 PRIVATE] Loaded the Private-Event: Member-Count`.blue.bold)
client.on('guildMemberAdd', member => {
  let myGuild = client.guilds.cache.get('863303592793079830'); 
  let UsermemberCount = myGuild.members.cache.filter(member => !member.user.bot).size;
  let TotalmemberCount = myGuild.memberCount;
let TotalmemberCountChannel = myGuild.channels.cache.get('947661201284923452'); 
   TotalmemberCountChannel.setName('👤 All Members: ' + TotalmemberCount)
     let UsermemberCountChannel = myGuild.channels.cache.get('939325788468174868'); 
   UsermemberCountChannel.setName('⍿🧑・Users: ' + UsermemberCount)
  if(member.user.bot) return;
  const join_emb = new Discord.MessageEmbed()
  .setColor(`PURPLE`)
  .setTitle(`✌️ Welcome to Dpdx Hangout ✌️`)
  .setDescription(`**Dpdx Hangout is a place to have fun, talk to the community and even to Order a Sick bot made by us!**`)
    .addField(`**__View Our Bots & Prices__**`, "<#983011999774568508>")
  .addField(`**__Order Bot/ Get Support:__**`, "<#983011998205878312>")
  .addField(`**__Chat with the Community:__**`, "<#983012004296011826>")
  .addField(`**__Use Bot Commands:__**`, "<#983012008569995264>")
  .addField(`**__Suggest Ideas:__**`, "<#983011994535882762>")
  .setFooter(`Enjoy your stay at Dpdx Hangout!`)
  member.send({ embeds: [join_emb] })
  myGuild.channels.cache.get("983012004296011826").send({ content: `<:join:994522582189625394> **${member.user} Welcome to Dpdx Hangout! We now have \`${TotalmemberCount}\` members!** ✌️` })
});

client.on('guildMemberRemove', member => {
  let myGuild = client.guilds.cache.get('863303592793079830'); 
  let UsermemberCount = myGuild.members.cache.filter(member => !member.user.bot).size;
  let TotalmemberCount = myGuild.memberCount;
let TotalmemberCountChannel = myGuild.channels.cache.get('983011960859807764'); 
   TotalmemberCountChannel.setName('👤 All Members: ' + TotalmemberCount)
     let UsermemberCountChannel = myGuild.channels.cache.get('983011961887420476'); 
   UsermemberCountChannel.setName('⍿🧑・Users: ' + UsermemberCount)
  if(member.user.bot) return;
  myGuild.channels.cache.get("983012004296011826").send({ content: `<:leave:994529461242449962> **${member.user.username} left our server! We now have ${TotalmemberCount} members...** ✌️` })
});