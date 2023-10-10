const fs = require('fs')
const chalk = require('chalk')

// configurações ligar e desligar 
global.antipalavrao = []
global.isVisualizar = true // true pra ativa e false pra desligar 
global.isAutostickerpv = true  // true pra ativa e false pra desligar 
global.isAutostickergp = false // true pra ativa e false pra desligar 
global.isAntiligação = true // true pra ativa e false pra desligar 
global.isBemVindo = true // true pra ativa e false pra desligar 
global.isVerificado = true  // true pra ativa e false pra desligar 

// configuracoes do dono e do bot
global.numerododono = ['17864448881'] //número do dono
global.nomedobot = `Venom Console` //nome do bot
global.nomedodono = 'Eypz God'
global.packnome = '💻Feito por: Venom Console 🕸️\n🎭Criador: Eypz'
global.author = '📞Whatsapp: 17864448881\n🔔Canal: youtube.com/@eypzgod'
global.nomedoqr = 'VenomQr'
global.prefixos = "."
global.venomemoji = '🕸️'
global.reagir1 = '🔥' //===❗ coloque o emoji que vc deseja ===//
global.reagir2 = '❗' //===❗ coloque o emoji que vc deseja ===//
global.reagir3 = '🤣' //===❗ coloque o emoji que vc deseja ===//
global.reagir4 = '🤬' //===❗ coloque o emoji que vc deseja ===//

//configuração de respostas
global.resposta = {
    sucesso: '✓ Sucesso!',
    admin: '*Este comando só pode ser usado pelo administradores do grupo‼️*',
    botAdmin: '*Para eu executar este comando preciso se tornar adm deste grupo‼️*.',
    dono: '*Este comando só pode ser usado pelo meu proprietário ‼️*',
    grupo: '*Este comando só pode ser usado em grupos‼️*',
    premium: '*Este comamdo só pode ser usado por usuário preimium‼️*\n*caso queira comprar seu acesso vip ebtre em contato com o venom*\n*Contato:* wa.me/+559784043928',
    privado: '*Este comando so pode ser usado em um bate-papo privado‼️*',
    bot: '*Este comando só pode ser usado pelo próprio número do bot‼️*',
    espere: '*Espere uns minutos..⌛*',
    endLimit: '*Limite esgotado, ele sera resetado em 24hrs.✍️*',
}

global.limitawal = {
    premium: "Infinity",
    free: 10
}

//fotos 
global.thumb = fs.readFileSync('./dados/imagem/venom.jpg')
global.fotomenu = fs.readFileSync('./dados/imagem/venom.jpg')
global.semperfil = fs.readFileSync('./dados/imagem/semperfil.jpg')
global.thumb1 = fs.readFileSync('./dados/imagem/venom.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`O arquivo '${__filename}' \nFoi atualizado!!`))
	delete require.cache[file]
	require(file)
})
