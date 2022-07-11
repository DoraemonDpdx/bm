const client = require("../index");
const { MessageEmbed, Collection, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js")
const moment = require("moment")
const db = require(`quick.db`)
console.log(`[🔑 PRIVATE] Loaded the Private-Event:Verification`.blue.bold)
client.on("interactionCreate", async (interaction) => {
  if(!interaction.isButton() && !interaction.isSelectMenu()) return;
  const appu = "983011809000849469";
      if (interaction.customId == `appnd`) {
      if(interaction.member.roles.cache.has(appu)) {
        await interaction.member.roles.remove(appu)
        return interaction.reply({ content: `<:no:933239221836206131> **You already were verified, so i unverified  you!**`, ephemeral: true })
      }
      interaction.member.roles.add(appu)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly verified you!**`, ephemeral: true })
    } 
})