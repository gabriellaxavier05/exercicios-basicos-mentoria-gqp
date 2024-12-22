let arrayMisto = [10, "teste", "palavra", false, 42] // 5 posições

for (let index = 0; index < arrayMisto.length; index++){ // o contador é inicializado aqui, juntamente com a condição e a incrementação
    // index é o contador
    // indez++ é o mesmo que index = index + 1

    console.log("Posição atual do vetor: " + index) // exibe o número da posição
    console.log("------------------------------")
    console.log("Valor atual do vetor: " + arrayMisto[index]) // exibe o conteúdo da versão atual do vetor percorrido
}