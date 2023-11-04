const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', async () => {
  console.log(`${client.user.tag} sudah online!`)
  client.user.setActivity("Jangan Lupa Subscribe")//bisa diganti sesuai keinginan
})

client.on('message', async message => {
  if(message.content === "indonesia") message.reply(":flag_id:")
})
client.login("OTY5MTA1MDcyOTU5MTI3NTUy.GFQL8o.smiUGw0j3m1IqT-qQWB2H1rx_S325Uzlie2f8I")
