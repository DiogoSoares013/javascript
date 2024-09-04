function calcular () {
    n = window.document.getElementById('inum')
    res = window.document.getElementById('res')

    if (n.value.length == 0 || n.value == 0) { // se ele nao colocar nada ou colocar 0 a tabuada nao vai ser feita
        alert('ERRO digite um valor')
    } else {
        res.innerHTML = ''
        for(c=1;c<=10;c++) { // fazendo um contador de 1 ate 10
            tab = n.value * c // vai multiplicar a cada vez que o contador subir
            res.innerHTML += ` ${n.value} x ${c} = ${tab} <br>`
        }
    }
}