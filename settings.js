require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6282396328667" // kalo ga paham chat gw dstu 🗿
global.namaowner = "KingLidoz"

//======== Setting Bot & Link ========//
global.namabot = "Shina Mahiru" 
global.namabot2 = "Shina Mahiru"
global.foother = "© Copyright Shina Mahiru - 2024"
global.idsaluran = "blm bikin"
global.linkgc = 'blm bikin'
global.linksaluran = "blm bikin"
global.linkyt = 'blm  bikin'
global.linktele = "blm bikin"
global.packname = "Shina Mahiru"
global.author = "Shina Mahiru By KingLidoz"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = false
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 10000
global.delayjpm = 10000

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "-" // LINK LOGIN PANEL
global.apikey = "-" // PLTA AMBIL DISETTINGAN ADMIN PANEL / APLICATION
global.capikey = "-" // PLTC AMBIL DIACCOUNT

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = false
global.gopay = false
global.ovo = false
global.seabank = false
global.pulsa = false
global.qris = fs.readFileSync("./media/qris.jpeg")
                             
//=========== Api Domain ===========//
global.zone1 = "..."
global.apitoken1 = "..."
global.tld1 = "..."

//========== Api Domain 2 ==========//
global.zone2 = "...";
global.apitoken2 = "...";
global.tld2 = "...";
//========== Api Domain 3 ==========//
global.zone3 = "....";
global.apitoken3 = "...";
global.tld3 = "...";
//========== Api Domain 4 ==========//
global.zone4 = "....";
global.apitoken4 = "....";
global.tld4 = "...";

//========= Setting Message =========//
global.msg = {
"error": "Error rek butut 🗿🤣",
"done": "cek bng 🗿", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "Fitur Khusus ownerkuuuu", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer KibgLidoz"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
