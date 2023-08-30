function contar(){
    const emoji = ["\u{1F449}","&#x1F3F4"]
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var conta = ''

    if (passo.value.length == 0 || inicio.value.length == 0 || fim.value.length == 0){
        alert('[ ERRO ] Digite novamente os dados!')
    }else{
        let vinicio = Number(inicio.value)
        let vfim = Number(fim.value)
        let vpasso = Number(passo.value)

        if (vinicio == vfim){
            alert("[ ERRO ] Inicio e fim são iguais!")
        }else if (vinicio < vfim){
            while (vinicio <= vfim){
                conta = conta + `${vinicio} ${emoji[0]} `
                if (vinicio == vfim){
                    conta = conta + `${emoji[1]}`
                }
                vinicio = vinicio + vpasso
            }
        }else{
            while (vinicio >= vfim){
                conta = conta + `${vinicio} ${emoji[0]} `
                if (vinicio == vfim){
                    conta = conta + `${emoji[1]}`
                }
                vinicio = vinicio - vpasso
            }
        }
        res.innerHTML = conta
    }
}
