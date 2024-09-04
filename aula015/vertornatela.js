valores = [8,1,7,4,2,9]
/*
for (p = 0; p<valores.length ; p++) {
    console.log(`A posição ${p} tem valor ${valores[p]}`)
}
*/

for (let pos in valores) {
    console.log(`A posicao ${pos} tem valor ${valores[pos]}`)
}