const client = require("../index");
const { MessageEmbed, Collection, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js")
const moment = require("moment")
const db = require(`quick.db`)
console.log(`[🔑 PRIVATE] Loaded the Private-Event:Special Role-Picker`.blue.bold)
client.on("interactionCreate", async (interaction) => {
  if(!interaction.isButton() && !interaction.isSelectMenu()) return;
  const redRolea = "983011888617103480";
  const blueRolea = "983011905155235860";
  const greenRolea = "992431372574670868";
  const yellowRolea = "992431668554125412";
  const heRolea = "983011843524145226";
  const sheRolea = "983011842798542898";
  const theyRolea = "983011845742948412";
  const askRolea = "983011851195514950";
  const annRolea = "983011891716714546";
  const eventRolea = "983011886880665650";
  const wakeRolea = "983011882124312657";
    if(interaction.customId == `app`) {
      const splpickembed = new MessageEmbed()
      .setColor(`GREEN`)
      .setTitle(`✌️ Self-Roles | Role-Pick ✌️`)
      .addField(`**__Picked:__**`, "`None`")
      .setFooter(`⚡ Powered by Dpdx!`)
      const rowa = new MessageActionRow()
      .addComponents([
        new MessageButton()
        .setLabel(`Need Access Roles`)
        .setCustomId(`need_roles`)
        .setStyle(`SECONDARY`),
        new MessageButton()
        .setLabel(`Continent Roles`)
        .setCustomId(`continent_roles`)
        .setStyle(`SECONDARY`),
        new MessageButton()
        .setLabel(`Language Roles`)
        .setCustomId(`lang_roles`)
        .setStyle(`SECONDARY`)
      ])
      const row2a = new MessageActionRow()
      .addComponents([
        new MessageButton()
        .setLabel(`Information`)
        .setEmoji(`❓`)
        .setCustomId(`roles_info`)
        .setStyle(`PRIMARY`)
      ])
      interaction.reply({ embeds: [splpickembed], components: [rowa, row2a], ephemeral: true })
    } else if (interaction.customId == `need_roles`) {
      const splpickembed = new MessageEmbed()
      .setColor(`GREEN`)
      .setTitle(`✌️ Self-Roles | Role-Pick ✌️`)
      .addField(`**__Picked:__**`, "`NeedAccess_Roles`")
      .setFooter(`⚡ Powered by Dpdx!`)
      const rowa = new MessageActionRow()
      .addComponents([
        new MessageButton()
        .setLabel(`CodeAccess`)
        .setEmoji(`🔴`)
        .setCustomId(`reda_role`)
        .setStyle(`SECONDARY`),
        new MessageButton()
        .setLabel(`MovieAccess`)
        .setEmoji(`🔵`)
        .setCustomId(`bluea_role`)
        .setStyle(`SECONDARY`),
        new MessageButton()
        .setLabel(`AppliedForStaff`)
        .setEmoji(`🟢`)
        .setCustomId(`greena_role`)
        .setStyle(`SECONDARY`),
        new MessageButton()
        .setLabel(`OpenTicket`)
        .setEmoji(`🟡`)
        .setCustomId(`yellowa_role`)
        .setStyle(`SECONDARY`)
      ])
      const row2a = new MessageActionRow()
      .addComponents([
        new MessageButton()
        .setLabel(`Go Back`)
        .setEmoji(`⏪`)
        .setCustomId(`rolesa_back`)
        .setStyle(`PRIMARY`)
      ])
      interaction.update({ embeds: [splpickembed], components: [rowa, row2a], ephemeral: true })
    } else if (interaction.customId == `continent_roles`) {
      const splpickembed = new MessageEmbed()
      .setColor(`GREEN`)
      .setTitle(`✌️ Self-Roles | Role-Pick ✌️`)
      .addField(`**__Picked:__**`, "`Continent_Roles`")
      .setFooter(`⚡ Powered by Dpdx!`)
      const rowa = new MessageActionRow()
      .addComponents([
        new MessageButton()
        .setLabel(`Asia`)
        .setEmoji(`👨`)
        .setCustomId(`hea_role`)
        .setStyle(`SECONDARY`),
        new MessageButton()
        .setLabel(`Europe`)
        .setEmoji(`👩`)
        .setCustomId(`shea_role`)
        .setStyle(`SECONDARY`),
        new MessageButton()
        .setLabel(`America`)
        .setEmoji(`🙎`)
        .setCustomId(`theya_role`)
        .setStyle(`SECONDARY`),
        new MessageButton()
        .setLabel(`Australia/Africa`)
        .setEmoji(`🤔`)
        .setCustomId(`aska_role`)
        .setStyle(`SECONDARY`)
      ])
      const row2a = new MessageActionRow()
      .addComponents([
        new MessageButton()
        .setLabel(`Go Back`)
        .setEmoji(`⏪`)
        .setCustomId(`rolesa_back`)
        .setStyle(`PRIMARY`)
      ])
      interaction.update({ embeds: [splpickembed], components: [rowa, row2a], ephemeral: true })
    } else if (interaction.customId == `lang_roles`) {
      const splpickembed = new MessageEmbed()
      .setColor(`GREEN`)
      .setTitle(`✌️ Self-Roles | Role-Pick ✌️`)
      .addField(`**__Picked:__**`, "`Language_Roles`")
      .setFooter(`⚡ Powered by Dpdx!`)
      const rowa = new MessageActionRow()
      .addComponents([
        new MessageButton()
        .setLabel(`English`)
        .setEmoji(`📣`)
        .setCustomId(`anna_role`)
        .setStyle(`SECONDARY`),
        new MessageButton()
        .setLabel(`Hindi`)
        .setEmoji(`🌆`)
        .setCustomId(`eventa_role`)
        .setStyle(`SECONDARY`),
        new MessageButton()
        .setLabel(`German`)
        .setEmoji(`🙃`)
        .setCustomId(`wakea_role`)
        .setStyle(`SECONDARY`)
      ])
      const row2a = new MessageActionRow()
      .addComponents([
        new MessageButton()
        .setLabel(`Go Back`)
        .setEmoji(`⏪`)
        .setCustomId(`rolesa_back`)
        .setStyle(`PRIMARY`)
      ])
      interaction.update({ embeds: [splpickembed], components: [rowa, row2a], ephemeral: true })
    } else if (interaction.customId == `rolesa_back`) {
      const splpickembed = new MessageEmbed()
      .setColor(`GREEN`)
      .setTitle(`✌️ Self-Roles | Role-Pick ✌️`)
      .addField(`**__Picked:__**`, "`None`")
      .setFooter(`⚡ Powered by Dpdx!`)
      const rowa = new MessageActionRow()
      .addComponents([
        new MessageButton()
        .setLabel(`NeedAccess Roles`)
        .setCustomId(`need_roles`)
        .setStyle(`SECONDARY`),
        new MessageButton()
        .setLabel(`Continent Roles`)
        .setCustomId(`continent_roles`)
        .setStyle(`SECONDARY`),
        new MessageButton()
        .setLabel(`Language Roles`)
        .setCustomId(`lang_roles`)
        .setStyle(`SECONDARY`)
      ])
      const row2a = new MessageActionRow()
      .addComponents([
        new MessageButton()
        .setLabel(`Information`)
        .setEmoji(`❓`)
        .setCustomId(`rolesa_info`)
        .setStyle(`PRIMARY`)
      ])
      interaction.update({ embeds: [splpickembed], components: [rowa, row2a], ephemeral: true })
      } else if (interaction.customId == `rolesa_info`) {
        const embeda = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`✌️ Self-Roles | F-A-Q ✌️`)
        .addField(`**__How to Pick a role__**`, "**You can pick a role by Clicking one of the Role Categorys. Then by pressing on the rple provided! You can press it again to remove the role!**")
        .addField(`**__My Developer__**`, "**I was coded by <@744134908078719114> and <@926859873214406708> made Dpdx possible!**\n**<@744134908078719114> Codes most of the bots & <@926859873214406708> Helps code then As well as Manages the server! We respect our team members in Dpdx!**\n\n**Here is the team:**\n<@755876771395797183> ~ Bot Developer & Founder\n<@755876771395797183> ~ Co-Bot Developer & Founder\n<@755876771395797183> ~ Co-Founder & Co-Bot Developer\n<@926859873214406708> ~ Site Dev, Server Manager, CEO-Bot Dev")
        .addField(`**__Source Code?__**`, "**NO! This system will NOT be Open sourced! Learn to make it yourself, or order one from us!**")
      interaction.reply({ embeds: [embeda], ephemeral: true })
        } else if (interaction.customId == `reda_role`) {
      if(interaction.member.roles.cache.has(redRolea)) {
        await interaction.member.roles.remove(redRolea)
        return interaction.reply({ content: `<:no:933239221836206131> **You already have the role, so i removed it from you!**`, ephemeral: true })
      }
      interaction.member.roles.add(redRolea)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly added the role!**`, ephemeral: true })
    } else if (interaction.customId == `bluea_role`) {
      if(interaction.member.roles.cache.has(blueRolea)) {
        await interaction.member.roles.remove(blueRolea)
        return interaction.reply({ content: `<:no:933239221836206131> **You already have the role, so i removed it from you!**`, ephemeral: true })
      }
      interaction.member.roles.add(blueRolea)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly added the role!**`, ephemeral: true })
    } else if (interaction.customId == `greena_role`) {
      if(interaction.member.roles.cache.has(greenRolea)) {
        await interaction.member.roles.remove(greenRolea)
        return interaction.reply({ content: `<:no:933239221836206131> **You already have the role, so i removed it from you!**`, ephemeral: true })
      }
      interaction.member.roles.add(greenRolea)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly added the role!**`, ephemeral: true })
    } else if (interaction.customId == `yellowa_role`) {
      if(interaction.member.roles.cache.has(yellowRolea)) {
        await interaction.member.roles.remove(yellowRolea)
        return interaction.reply({ content: `<:no:933239221836206131> **You already have the role, so i removed it from you!**`, ephemeral: true })
      }
      interaction.member.roles.add(yellowRolea)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly added the role!**`, ephemeral: true })
    } else if (interaction.customId == `hea_role`) {
      if(interaction.member.roles.cache.has(heRolea)) {
        await interaction.member.roles.remove(heRolea)
        return interaction.reply({ content: `<:no:933239221836206131> **You already have the role, so i removed it from you!**`, ephemeral: true })
      }
      interaction.member.roles.add(heRolea)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly added the role!**`, ephemeral: true })
    } else if (interaction.customId == `shea_role`) {
      if(interaction.member.roles.cache.has(sheRolea)) {
        await interaction.member.roles.remove(sheRolea)
        return interaction.reply({ content: `<:no:933239221836206131> **You already have the role, so i removed it from you!**`, ephemeral: true })
      }
      interaction.member.roles.add(sheRolea)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly added the role!**`, ephemeral: true })
    } else if (interaction.customId == `theya_role`) {
      if(interaction.member.roles.cache.has(theyRolea)) {
        await interaction.member.roles.remove(theyRolea)
        return interaction.reply({ content: `<:no:933239221836206131> **You already have the role, so i removed it from you!**`, ephemeral: true })
      }
      interaction.member.roles.add(theyRolea)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly added the role!**`, ephemeral: true })
    } else if (interaction.customId == `aska_role`) {
      if(interaction.member.roles.cache.has(askRolea)) {
        await interaction.member.roles.remove(askRolea)
        return interaction.reply({ content: `<:no:933239221836206131> **You already have the role, so i removed it from you!**`, ephemeral: true })
      }
      interaction.member.roles.add(askRolea)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly added the role!**`, ephemeral: true })
    } else if (interaction.customId == `yellowa_role`) {
      if(interaction.member.roles.cache.has(askRolea)) {
        await interaction.member.roles.remove(askRolea)
        return interaction.reply({ content: `<:no:933239221836206131> **You already have the role, so i removed it from you!**`, ephemeral: true })
      }
      interaction.member.roles.add(askRolea)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly added the role!**`, ephemeral: true })
    } else if (interaction.customId == `anna_role`) {
      if(interaction.member.roles.cache.has(annRolea)) {
        await interaction.member.roles.remove(annRolea)
        return interaction.reply({ content: `<:no:933239221836206131> **You already have the role, so i removed it from you!**`, ephemeral: true })
      }
      interaction.member.roles.add(annRolea)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly added the role!**`, ephemeral: true })
    } else if (interaction.customId == `eventa_role`) {
      if(interaction.member.roles.cache.has(eventRolea)) {
        await interaction.member.roles.remove(eventRolea)
        return interaction.reply({ content: `<:no:933239221836206131> **You already have the role, so i removed it from you!**`, ephemeral: true })
      }
      interaction.member.roles.add(eventRolea)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly added the role!**`, ephemeral: true })
    } else if (interaction.customId == `wakea_role`) {
      if(interaction.member.roles.cache.has(wakeRolea)) {
        await interaction.member.roles.remove(wakeRolea)
        return interaction.reply({ content: `<:no:933239221836206131> **You already have the role, so i removed it from you!**`, ephemeral: true })
      }
      interaction.member.roles.add(wakeRolea)
      interaction.reply({ content: `<a:yes:933239140718358558> **Successfuly added the role!**`, ephemeral: true })
    } 
})