function verificar() {
    data = new Date()
    ano = data.getFullYear() // pegando o ano do computador 
    fano = document.getElementById('txtano') // formulario onde a pessoa coloca o ano em que nasceu
    res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) { // se a pessoa nao colocar data ou colocar um ano maior q o atual vai dar erro
        window.alert('ERRO Verifique o ano novamente!')
    } else {
        fsex = document.getElementsByName('radsex') // pegando oque a pessoa marcou no radio
        idade = ano - Number(fano.value)
        genero = ''
        img = document.createElement('img') // cria a tag imagem e depois coloca o id de foto
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){ // verificando oque a pessoa marcou e criando uma var em cima disso
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // vai adicionar o elemento depois do texto acima 
    }
}