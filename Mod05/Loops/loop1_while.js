let array = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
// console.log(array.length) // retorna o tamnho do vetor (quantas posições tem)
let x = 0 // inicialização do contador

/* laço while */
while (x < array.length){ // enquanto x for menor que o tamanho do vetor...
    console.log(array[x]) // exibe o valor da posição atual do percorrimento do vetor
    x = x + 1 // incrementação
}