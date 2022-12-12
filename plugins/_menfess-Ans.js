/**
 * Jangan Di Hapus!!
 *
 * Buatan FokusDotId (Fokus ID)
 * https://github.com/FokusDotId/
 *
 * Script Bot By @SaipulAnuar (ᴹᴿ᭄ King Of Bear ×፝֟͜×)
 * Youtube: https://youtu.be/pwLZpdfO8AU
 * 
 * Ingin tambah fitur tapi tidak bisa coding?
 * Ingin perbaiki fitur error tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */


export async function before(m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	console.log(m)
	if (m.text === 'Balas Pesan' && m.quoted.mtype == 'buttonsMessage') return m.reply("Splease send your reply message.");
        let txt = `Hey sis @${mf.dari.split('@')[0]}, You received this reply.\n\nReply message:\n${m.text}\n`.trim();
	await this.reply(mf.dari, txt, null).then(() => {
		m.reply('Successfully sent reply.')
		this.delay(1000)
		delete this.menfess[mf.id]
		return !0
	})
}
