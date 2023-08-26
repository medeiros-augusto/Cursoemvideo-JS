function verificar() {

    var fano = document.getElementById('txtano')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ ERROR ] Digite novamente os dados.')
    }else{
         var fsex = document.getElementsByName('radsex')
         var idade = Number(ano) - Number(fano.value)
         var genero = ''
         var foto = document.createElement('img')
         foto.setAttribute('src', '')
         if (fsex[0].checked){
            genero = 'Homem'
            if (idade <= 3){
                //bebe
                foto.setAttribute('src', 'foto-bebe-m.png')
                
            }else if (idade <= 12){
                //criança
                foto.setAttribute('src', 'foto-criança-m.png')
                
            }else if(idade <= 17){
                //adolescente
                foto.setAttribute('src', 'foto-adolescente-m.png')

            }else if(idade <= 29){
                //jovem
                foto.setAttribute('src', 'foto-jovem-m.png')
                
            }else if(idade <= 59){
                //adulto
                foto.setAttribute('src', 'foto-adulto-m.png')

            }else{
                //idoso
                foto.setAttribute('src', 'foto-idoso-m.png')

            }
         }else{
            genero = 'Mulher'
            if (idade <= 3){
                //bebe
                foto.src='foto-bebe-f.png'
                
            }else if (idade <= 12){
                //criança
                foto.src='foto-criança-f.png'
                
            }else if(idade <= 17){
                //adolescente
                foto.src='foto-adolescente-f.png'
            }else if(idade <= 29){
                //jovem
                foto.src='foto-jovem-f.png'
                
            }else if(idade <= 59){
                //adulto
                foto.src='foto-adulto-f.png'

            }else{
                //idoso
                foto.src='foto-idosa-f.png'
                
            }
         }
         res.innerHTML = `Encontramos um ${genero} de ${idade} anos!<br>`
         res.appendChild(foto)
         res.style.textAlign = 'center'
         
    }
}

