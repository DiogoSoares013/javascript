function calcular () {
    n = window.document.getElementById('inum')
    res = window.document.getElementById('res')

    if (n.value.length == 0 || n.value == 0) {
        alert('ERRO digite um valor')
    } else {
        for(c=1;c<=10;c++) {
            tab = n.value * c
            res.innerHTML += ` ${n.value} x ${c} = ${tab} <br>`
        }
    }
}