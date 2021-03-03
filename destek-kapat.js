const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  let destekkanal = db.fetch(`destekkanal_${message.guild.id}`)
  const kanal = client.channels.cache.get('801004205389250583')//DESTEK AÇANIN DESTEĞİNİN DÜŞECEĞİ LOG İD
  const dostbot = args.slice(0).join(' ');
  if(message.channel.id !== destekkanal) return message.channel.send(`Bu Komudu Sadece <#${destekkanal}> Adlı Kanalda Kullanabilirsin ! `)
  
  db.add(`sıra_${message.guild.id}`,-1)
    const sıfırlandı = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL()) 
    .setThumbnail(message.author.avatarURL()) 
    .setTitle(`Destek Kapatma`)
    .setDescription(``+message.author.tag+` **Adlı Kullanıcı** \n `+dostbot+` **Talebini Kapattı**`)
    kanal.send(sıfırlandı)
    message.channel.send('`Destek Talebi Başarıyla Kapatıldı.`');
    }

    //////


;

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,  
  };
  
  exports.help = {
    name: 'destek-kapat',
    description: 'Talebinizi belirterek destek alabilirsiniz.',
    usage: 'destek-al ',
   
  };