function contar () {
    ini = window.document.getElementById('txti')
    fim = window.document.getElementById('txtf')
    passo = window.document.getElementById('txtp')
    res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO faltam dados!')
        res.innerHTML = 'impossivel contar!'

    } else {
        res.innerHTML = 'Contando: <br>'
        i = Number(ini.value)
        f = Number(fim.value) // talvez tenha q colocar .value, (teve q colocar mesmo)
        p = Number(passo.value)

        if(p <= 0) {
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(c = i ; c <= f ; c+= p) { // enquanto c for menor igual ao fim (c e fim numero dado pelo usuario) ele vai somar com p (passos dado pelo usuario)
            res.innerHTML += ` ${c} \u{1F449}` // detalhe no espaco dado por causa da concatenacao e += sendo usado para mostrar todos os dados gerados com a repeticao
        }
        } else {
            for(c=i ; c >= f ; c -= p) { // enquanto o inicio for maior que o final o programa vai tirar (p) vezes ate que chegue no valor de (f)
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}