export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 5) {
            if (this.spam[m.sender].count > 5) {
                global.db.data.users[m.sender].banned = true
                let bear = `*📮Kamu di banned karena spam...!!!*

_*Note*_
Mau di unban? Silahkan subscribe like dan koment terlebih dahulu di video ini https://youtu.be/h8lX25IPgr4 lalu screnshoot dan kirim buktinya ke saya agar saya unban`
                m.reply(bear)
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}
