let arrayMisto = [10, "teste", "palavra", false, 42] // 5 posições
let x = 0 // inicialização do contador do laço

do { // FAÇA.. 
    console.log("Posição atual do vetor: " + x) // exibe o número da posição
    console.log("------------------------------")
    console.log("Valor atual do vetor: " + arrayMisto[x]) // exibe o conteúdo da versão atual do vetor percorrido
    x = x + 1 // incrementação
} while (x < arrayMisto.length) // ... ENQUANTO x for menor que o tamanho do vetor