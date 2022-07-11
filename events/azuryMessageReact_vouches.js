const client = require("../index");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");


client.on("messageCreate", async (message) => {


 if (message.channel.id !== "983012001439698954"|| message.author.bot) return;
 SendInChannel();

 function SendInChannel() {
  const channel = client.channels.cache.get("983012001439698954");
  if (!channel) return;
  
  message.react("⭐")
  message.react("😎")
  message.react("✅")
  message.react("<a:yesop:933761263668965416>")
  message.react("<a:heartgg:933761277212364822>")
  message.react("<:Tumblr:933761234375942145>")
   }
})

