import fs from 'fs'
import fetch from 'node-fetch'
 let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default;
           
           const ftrol = {
  key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999,
                            status: 1,
                            surface : 1,
                            message: `๐ธ๐๐ก_๐๐๐๐๐๐๐\n5 Minute`, //Kasih namalu
                            orderTitle: `๐ธ๐๐ก_๐๐๐๐๐๐๐\n5 Minute`,
                            thumbnail: await (await fetch(giflogo2)).buffer(), //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
          //m.reply(teks)
          let jawab = `*The bot is active for*\n5 Minutes\n\n_ยฉแดษชษดษข แดา สแดแดส_`.trim()
conn.sendMessage(m.chat,{text:wm}, {quoted: ftrol})
}


handler.help = ['troli']

handler.tags = ['แดแดษดแดษชษดษข sแดแดาา']

handler.command = /^troli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false

export default handler
