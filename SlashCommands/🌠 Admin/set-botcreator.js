const { Client, CommandInteraction, MessageEmbed, MessageSelectMenu, MessageActionRow, MessageButton } = require("discord.js");
const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");
const db = require(`quick.db`);

module.exports = {
    name: "ticket-setbotcreator",
    description: "ποΈ Set the Ticket to the Bot Creator Category",
    type: 'CHAT_INPUT',
    options: [], 
    run: async (client, interaction, args) => {
      
      let ch = interaction.channel;
      let msg = await interaction.followUp(`<a:loading_tranper:933761225974775839> Loading..`);
      if(!interaction.member.roles.cache.has("983011782559957012")) return msg.edit(`β **You can't use this!**`)
      const checkchannel = db.get(`tc_channel_${ch.id}`);
      // Makes it check if Channel is Ticket or not
      if(!checkchannel) return msg.edit(`β **This isn't a Ticket Channel!**`)
      const opener = db.get(`user${ch.id}`);
      const user = interaction.guild.members.cache.get(opener.id);
      

      
      

      // Set the Channel Name
      ch.setName(`βΏπ€γ»bcγ»${user.user.username}`);

      
      // Notify/Ping the Owners
       msg.edit({ content: `π **The Bot Creators  were informed!**` })
      interaction.channel.send(`<@&983011779871375361>`).then((m) => { 
        m.delete()
      })
    },
};
