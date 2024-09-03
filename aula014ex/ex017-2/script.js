function tabuada() {
    num = document.getElementById('txtn')
    tab = document.getElementById('seltab')
    
    if (num.value.length == 0){
         window.alert('Por favor insira um numero')
    } else {
        n = Number(num.value)
        tab.innerHTML = '' // aqui para deixar vazio se for colocada varias tabuadas
        for(c=1;c<=10;c++) {
            
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // para outras linguagens de backend
            tab.appendChild(item)
        }
    }
   
}