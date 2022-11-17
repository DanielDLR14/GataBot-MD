/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let isClose = {
'open': 'not_announcement',
'abrir': 'not_announcement',
'abierto': 'not_announcement',
'buka': 'not_announcement',
'on': 'not_announcement',
'1': 'not_announcement',
	
'close': 'announcement',
'cerrar': 'announcement',	
'cerrado': 'announcement',		
'tutup': 'announcement',
'off': 'announcement',
'0': 'announcement',
}[(args[0] || '')]
if (isClose === undefined) {
	
let nombre = [ 
lenguajeGB.smsDete9() + '1' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete10() + '1' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete9() + '2' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete10() + '2' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete9() + '3' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete10() + '3' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete9() + '4' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete10() + '4' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete9() + '5' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete10() + '5' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete9() + '6' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete10() + '6' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete9() + '7' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete10() + '7' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete9() + '10' + lenguajeGB.smsDete11(),
lenguajeGB.smsDete10() + '10' + lenguajeGB.smsDete11(),

lenguajeGB.smsDete9() + '12' + lenguajeGB.smsDete11(),
lenguajeGB.smsDete10() + '12' + lenguajeGB.smsDete11(),

lenguajeGB.smsDete9() + '24' + lenguajeGB.smsDete11(),
lenguajeGB.smsDete10() + '24' + lenguajeGB.smsDete11()]

let descripción = [ 
lenguajeGB.smsDete12() + '1' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete13() + '1' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete12() + '2' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete13() + '2' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete12() + '3' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete13() + '3' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete12() + '4' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete13() + '4' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete12() + '5' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete13() + '5' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete12() + '6' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete13() + '6' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete12() + '7' + lenguajeGB.smsDete11(), 
lenguajeGB.smsDete13() + '7' + lenguajeGB.smsDete11(), 
	
lenguajeGB.smsDete12() + '10' + lenguajeGB.smsDete11(),
lenguajeGB.smsDete13() + '10' + lenguajeGB.smsDete11(),

lenguajeGB.smsDete12() + '12' + lenguajeGB.smsDete11(),
lenguajeGB.smsDete13() + '12' + lenguajeGB.smsDete11(),

lenguajeGB.smsDete12() + '24' + lenguajeGB.smsDete11(),
lenguajeGB.smsDete13() + '24' + lenguajeGB.smsDete11()]

let comando = [ 
"open 1", "cerrar 1", 
"open 2", "cerrar 2",
"open 3", "cerrar 3",
"open 4", "cerrar 4",
"open 5", "cerrar 5",
"open 6", "cerrar 6",
"open 7", "cerrar 7",
"open 10", "cerrar 10",
"open 12", "cerrar 12",
"open 24", "cerrar 24"]

let sections = Object.keys(nombre, descripción, comando).map((v, index) => ({ title: `${lenguajeGB.smsParaAdmins()}`,
rows: [{ title: `${nombre[v]}`, description: `${descripción[v]}`, rowId: usedPrefix + command + ' ' + comando[v], }], }))

let caption = `${lenguajeGB['smsAvisoMG']()}
${lenguajeGB['smsMalused']()}
${lenguajeGB['smsGrupoTime1']()}
*${usedPrefix + command} ${lenguajeGB.lenguaje() == 'en' ? 'open' : 'abrir'} 1*
${lenguajeGB['smsGrupoTime2']()}
*${usedPrefix + command} ${lenguajeGB.lenguaje() == 'en' ? 'close' : 'cerrar'} 1*`

const listMessage = {
text: `${wm}`,
footer: `${caption}`,
title: null,
buttonText: `⚙️ ${lenguajeGB.smsConfi1()} ⚙️`,
sections }

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
	
//m.reply(caption)
throw false
}
let timeoutset = 180000 * args[1] // 24 //Una Hora 86400000
await conn.groupSettingUpdate(m.chat, isClose).then(async _=> {
m.reply(`${lenguajeGB['smsAvisoRG']()}${lenguajeGB['smsGrupoTime3']()} ${isClose == 'announcement' ? lenguajeGB.smsGrupoTime4() : lenguajeGB.smsGrupoTime5()} ${args[1] ? `${lenguajeGB['smsGrupoTime6']()} ${clockString(timeoutset)}*` : ''}`)
})
if (args[1]) {
setTimeout(async () => {
await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async _=>{
conn.reply(m.chat, `${isClose == 'not_announcement' ? lenguajeGB.smsGrupoTime7() : lenguajeGB.smsGrupoTime8()}!!`)
})
}, timeoutset)}}

handler.command = /^(grouptime|gctime)$/i
handler.botAdmin = true
handler.group = true 
handler.admin = true

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
