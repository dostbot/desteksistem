const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('BLACK')
.setDescription(`Sunucu İçin Ayarladığınız Destek Rol Başarıyla Sıfırlandı ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
message.channel.send(sıfırlandı)
db.delete(`destekrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  

.setColor('BLACK')
.setDescription(`Ayarlayacağınız Destek Rolü Belirtiniz ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
message.channel.send(ayarlanmadı)
}
db.set(`destekrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('BLACK')
.setDescription(`Destek Rol Başarıyla ${rol} Olarak Ayarlandı ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'destek-rol',
  description: 'kız rolünü ayarlar',
  usage: '!kız-rol @rol'
}