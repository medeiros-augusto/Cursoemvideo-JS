function contar(){
    const emoji = ["\u{1F449}","&#x1F3F4"]
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    var conta = ''

    if (passo == 0){
        alert('[ ERRO ] Não é possível contar de 0 em 0. Será contado de 1 em 1')
        passo = 1
        while (inicio <= fim){
            conta = conta + `${inicio} ${emoji[0]} `
            if (inicio == fim){
                conta = conta + `${emoji[1]}`
            }
            inicio = inicio + passo
        }
    
        while (inicio >= fim){
            conta = conta + `${inicio} ${emoji[0]} `
            if (inicio == fim){
                conta = conta + `${emoji[1]}`
            }
            inicio = inicio - passo
        }
    
        res.innerHTML = conta
    }else{
        while (inicio <= fim){
            conta = conta + `${inicio} ${emoji[0]} `
            if (inicio == fim){
                conta = conta + `${emoji[1]}`
            }
            inicio = inicio + passo
        }
    
        while (inicio >= fim){
            conta = conta + `${inicio} ${emoji[0]} `
            if (inicio == fim){
                conta = conta + `${emoji[1]}`
            }
            inicio = inicio - passo
        }
    
        res.innerHTML = conta
    }
}