let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Sorry, No absences today !*_\n\n*${usedPrefix}start absent* -to start to roll call`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*You have absent tiresg！🙄*'
    absen.push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
Tanggal: ${date}
${conn.absen[id][2]}
┌「 *Absen* 」  
├ Total: ${absen.length}
${list} 
└────`.trim()
    await conn.sendButton(m.chat, caption, global.wm, [['✔️ABSEN', `${usedPrefix}absen`], ['📑LIST ABSEN', `${usedPrefix}cekabsen`]], m)
}
handler.help = ['absen']
handler.tags = ['group']
handler.command = /^(absen|hadir)$/i
handler.group = true
handler.admin = true

export default handler
