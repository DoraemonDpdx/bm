const { Client, CommandInteraction, MessageEmbed, MessageSelectMenu, MessageActionRow, MessageButton } = require("discord.js");
const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");

module.exports = {
    name: "setup-verify",
    description: "👑 Setup the verify menu",
    type: 'CHAT_INPUT',
    options: [
      {
        name: "channel",
        description: "Select a channel you want to send the apply embed to",
        type: "CHANNEL",
        required: true,
      }
    ], 
    run: async (client, interaction, args) => {
      let ch = interaction.options.getChannel('channel');
      let msg = await interaction.followUp(`Fetching..`);

      if(!client.config.developers.includes(interaction.user.id)) return msg.edit(`🔒 You must be an owner to use this command!`)
      if(ch.type != 'GUILD_TEXT') return msg.edit(`🚩 You must provide a channel, and not category or voice channel!`)
      
      const emb = new MessageEmbed()
      .setAuthor({ name: `Dpdx Verification  `, iconURL: `${client.user.displayAvatarURL()}` })
      .setColor('#2f3136')
      .setFooter(`Made with 💖 by discord.dpdxgamer.ga`) 
      .setDescription(`**Apply for verification **\n\n***Click the \`button\` below to get verified  ticket!***`)
      .setImage(`https://media.discordapp.net/attachments/985880094268616754/990500862927458324/static.png`)
      const row = new MessageActionRow()
			.addComponents(
			  new MessageButton()
        .setLabel(`Apply For Verification `)
       .setCustomId(`appnd`)
        .setEmoji(`931664743138218055`)
        .setStyle(`SECONDARY`)
			);
      ch.send({ content: ` `, embeds: [emb], components: [row] });
      return msg.edit({ content: `💖 The verify system has successfully been setup view it here: ${ch}` })
    },
};
