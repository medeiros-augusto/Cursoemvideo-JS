function contar(){
    const emoji = ["\u{1F449}","&#x1F3F4"]
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    var conta = ''

    while (inicio <= fim){
        conta = conta + `${inicio} ${emoji[0]} `
        if (inicio == fim){
            conta = conta + `${emoji[1]}`
        }
        inicio = inicio + passo
    }
    res.innerHTML = conta
}