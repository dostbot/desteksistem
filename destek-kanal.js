const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`destekkanal_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(` **Başvuru Kanalı Zaten ayarlı değil.**`);
    db.delete(`destekkanal_${message.guild.id}`)
   message.channel.send(`**Başvuru Kanalı başarıyla sıfırlandı.**`);
    return
  }
  
if (!logk) return message.channel.send(` **Yanlış Kullanım Doğru Kullanım: ${prefix}destek-kanal #kanal**`);

db.set(`destekkanal_${message.guild.id}`, logk.id)

message.channel.send(`**Başvuru Kanalı Başarıyla ${logk} olarak ayarlandı.**`);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3 ,//Kendi permlerinize göre ayarlayın,
  kategori:'moderasyon'
};

exports.help = {
    name: 'destek-kanal',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};
