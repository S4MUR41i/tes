let handler = async m => m.reply(`
            *Jangan Lupa Join Grub AminBot*

            https://chat.whatsapp.com/ID36jYZjlYz7E4zus4SBed
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler