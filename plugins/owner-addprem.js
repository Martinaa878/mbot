//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `π§π»βπ»οΈ Etiqueta o menciona a alguien\n\nππ» Ejemplo : ${usedPrefix + command} @user`
if (global.prems.includes(who.split`@`[0])) throw 'π§π»βπ»οΈ El usuario Mensionado Ya es premium'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
π PREMIUM

@${who.split`@`[0]} ahora te conviertes en un usuario premium
β³β₯β³β₯β³β₯β³β₯β³β₯β³β₯β³β₯β³β₯β³β₯β³β₯
β³β₯Nombre: ${user.name}
  π΄πππππππππΈπ»
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'addpremium'] 

handler.group = true
handler.rowner = true

export default handler
