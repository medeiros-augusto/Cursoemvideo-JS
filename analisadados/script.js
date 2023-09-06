var arrayNum = []
var num = document.querySelector("#num")
var tabela = document.querySelector("#tabela")
var res = document.querySelector("#res")

function valida(n){
    if (arrayNum.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}
function enviar() {
    if (num.value.length == 0 || num.value > 100 || num.value < 1) {
        alert("[ ERRO ] Preencha o campo de número obedecendo as regras (somente números entre 1 a 100)!")
    } else if (valida(Number(num.value))){
        alert("[ ERRO ] Número já incluso na lista.")
    }else{
        var novaOpcao = document.createElement('option')
        novaOpcao.innerText = `Valor ${num.value} adicionado`
        tabela.appendChild(novaOpcao)
        arrayNum.push(Number(num.value))
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (arrayNum.length == 0){
        alert("[ ERRO ] Adicione valores antes de finalizar!")
    }else{
        var frases = []
    var soma = 0
    for(var i = 0; i <= 4; i++){
        frases[i] = document.createElement('p')
    }
    for(var c = 0; c < arrayNum.length; c++){
        soma += arrayNum[c]
    }
    var media = soma / arrayNum.length
    arrayNum.sort()
    frases[0].innerText=`Ao todo possuímos ${arrayNum.length} números`
    frases[1].innerText=`O maior valor informado foi ${arrayNum[arrayNum.length - 1]}`
    frases[2].innerText=`O menor valor informado foi ${arrayNum[0]}`
    frases[3].innerText=`Somando todos os números temos ${soma}`
    frases[4].innerText=`A média dos números digitados é ${media}`
    for(var i = 0; i <= 4; i++){
        res.appendChild(frases[i])
    }
    }
}