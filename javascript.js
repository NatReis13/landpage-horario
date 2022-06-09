function carregar(){

var msg =window.document.getElementById('msg')
var img = window.document.getElementById('fotos')
var data = new Date
var hora = 8
msg.innerHTML = `Agora são ${hora} Horas`
if (hora >= 0 && hora < 12) {
    img.src = './imagens/manhã.jpg'
    document.body.style.background = '#e2cd9f' 
}

else if (hora >= 12 && hora < 18) {
    img.src = './imagens/Tarde.jpg'
    document.body.style.background = '#b9846f'
}

else  {
    img.src = './imagens/Noite.jpg'
    document.body.style.background = '#515154'
}


}