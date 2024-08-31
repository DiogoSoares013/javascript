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
        if (fsex[0].checked){ // verificando oque a pessoa marcou e criando uma var em cima disso
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}