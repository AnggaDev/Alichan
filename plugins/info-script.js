import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `Sc Ini Di Jual Jika Minat Sung Chat Nomor Di Paling bawah
Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/ImYanXiao/Elaina-MultiDevice

Pengen Yang Model Script Bot Seperti Ini Bro?

Pengen yang udah di recode oleh developer *Script Private*?
Script bot ini dijual bila kalian mau bisa chat developer

wa.me/6285215511208'
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtu.be/MxsD35_F9Go",
    mediaType: "VIDEO",
    description: "https://youtube.com/channel/UC7dcYh3bx2TzYIo2aoTFRYQ", 
    title: 'NATSU - MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
