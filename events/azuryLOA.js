const client = require("../index");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const db = require(`quick.db`);
client.on("messageCreate", async (message) => {


 if (message.channel.id !== "983011980774367292"|| message.author.bot) return;
 SendInChannel();

 function SendInChannel() {
  const channel = client.channels.cache.get("983011980774367292");
  if (!channel) return;
   const count = db.get(`loacount_${message.author}`);
   message.member.setNickname(`${message.author.username} [LOA]`);
   db.add(`loacount_${message.author}`, 1);
   db.set(`loa_${message.author}`, message.content);
   const embed = new MessageEmbed()
   .setColor(`WHITE`)
   .setAuthor(`${message.author.username} • Leave of Absence`, message.author.displayAvatarURL())
   .setDescription(`${message.content}`)
   .setFooter(`USER-ID: `+message.author.id+`\n⟫ Use /endloa to end it early!`, message.guild.iconURL())
   message.delete()
   channel.send({ content: `<:RolesDEP:933776342170873906> **LOA OF: ${message.author} / <@&983011771172409454>**`, embeds: [embed] }).then((m) => { m.react("✅") });
   }
})
