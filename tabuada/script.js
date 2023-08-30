function gerar(){
    var num = document.querySelector("#num")
    var tabuada = document.querySelector("#tabuada")

    if(num.value.length == 0){
        alert("[ ERRO ] Digite um número!")
    }else{
        while(tabuada.firstChild){
            tabuada.removeChild(tabuada.firstChild)
        }
        for(var i = 1; i <= 10; i++){
            var opcao = document.createElement('option')
            opcao.innerText=`${num.value} x ${i} = ${Number(num.value) * i}`
            tabuada.appendChild(opcao)
        }
    }
}
