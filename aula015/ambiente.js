num = [2, 9,5 ,1,8]
// num[3] = 15
// num.push(77) coloca sempre no final da lista
num.sort()  //para ordem crescente 

console.log(`Nosso vetor é o ${num} e tem ${num.length} posições`)
pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor 8 esta na posicao ${pos}`)
}

