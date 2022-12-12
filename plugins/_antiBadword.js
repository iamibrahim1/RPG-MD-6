let badwordRegex =/anj(k|g)|ajn?(g|k)|a?njin(g|k)|asshole|b(a?n)?gsa?t|ko?nto?l|me?me?(k) |q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k| ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mother)?|kimak|kampang|lonte|col(i|mek?)|slut|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

export function before(m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    console.log(isBadword)

    if (chat.antiBadword && isBadword) {
        user.warning += 1
        this.sendButton(m.chat, `*📮ᴛᴏxɪᴄ ᴛᴇʀᴅᴇᴛᴇᴋꜱɪ !\nhttps://saipulanuar.ga/ ᯤ*
あ Warning: ${user. warning} / 5 ┊

[❗] If the warning reaches 5 you will *banned+kick*

You can only ask the Owner to unban him!\n\n🌸 Bot By King Of Bear

"Whoever believes in Allah and the Last Day, let him say good or be silent" (HR. al-Bukhari and Muslim).`, wm, [['🎀CEK WARN', '.cekwarn'], ['🎐AUTHOR BOT', '.owner']], m)
        if (user.warning >= 5) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                	this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
                   //this.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
                }
            }
        }
    }
    return !0
}



// jasa buat by Fokusdotid (Fokus ID)
