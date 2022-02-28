const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;ZaBot-MD;;;\nFN:ZaBot-MD\nitem1.TEL;waid=60102810046:+60 10-281 0046\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:Aiman\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'Aiman']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
