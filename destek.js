const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  const kanal = client.channels.cache.get('801004205389250583')//DESTEK AÇANIN DESTEĞİNİN DÜŞECEĞİ LOG İD
  let destekkanal = db.fetch(`destekkanal_${message.guild.id}`)
  let destekrol = db.fetch(`destekrol_${message.guild.id}`)
  let sıra = db.fetch(`sıra_${message.guild.id}`)
  
  
  const dostbot = args.slice(0).join(' ');
  if(!destekrol) return message.channel.send('Bir Destek Rol Belirtiniz')
  if(!destekkanal) return message.channel.send('Talep Kanalını belirtiniz')
  if(message.channel.id !== destekkanal) return message.channel.send(`Bu Komudu Sadece <#${destekkanal}> Adlı Kanalda Kullanabilirsin ! `)
  if (dostbot.length < 1) return message.channel.send('`Talep Açma Sebebinizi Belirtiniz.`')
  

  message.channel.send('`Destek Talebi Başarıyla Gönderildi,Yetkililerin Size Ulaşmasını BekLeyiniz.`');
  db.add(`sıra_${message.guild.id}`,1)
    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setThumbnail(message.author.avatarURL())
    .setTitle(`Destek Talebi!`)
    .setDescription(`
      **Talep Eden: **`+message.author.tag+`
      **Talep Sebebi: **\``+dostbot+`\`
      `)
    .setFooter(`Destek Sırası ${sıra}`)
    .setTimestamp()
    kanal.send(embed)

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['destek'],
    permLevel: 0,  
  };
  
  exports.help = {
    name: 'destek-al',
    description: 'Talebinizi belirterek destek alabilirsiniz.',
    usage: 'destek-al ',
   
  };