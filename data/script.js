function carregar(){
    var msg = document.querySelector('#msg')
    var imagem = document.querySelector('#imagem')
    var dataAtual = new Date();
    // var hora = dataAtual.getHours();
    var hora = 21

    if (hora >= 6 && hora < 12){
        msg.innerHTML = `Agora são ${hora}`
        imagem.src='manha.png'
        document.body.style.background='rgb(0, 168, 160)'
    } else if (hora < 18) {
        msg.innerHTML = `Agora são ${hora}`
        imagem.src='tarde.png'
        document.body.style.background='rgb(182, 101, 9)'
    }else{
        msg.innerHTML = `Agora são ${hora}`
        imagem.src='noite.png'
        document.body.style.background='rgb(40, 0, 73)'
    }
}
