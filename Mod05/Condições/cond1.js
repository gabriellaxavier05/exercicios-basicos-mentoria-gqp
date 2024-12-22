// Analisando se 2 valores são iguais ou diferentes

let x = 2
let y = 2

if (x == y) {
    console.log("Valores iguais")
}
else {
    console.log("Valores diferentes")
}


// Criando uma funlção com if-else para comparar números
/*
function compararNum (num1, num2) {
    if (num1 < num2){
        return "O 2o número é maior"
    }
    else if (num1 > num2) {
        return "O 1o número é maior"
    }
    else {
        return "Números iguais"
    }
}

// Chamando a função criada para ser exibida no console e passando parâmetros para a mesma
console.log(compararNum(0, 20))
*/


// Mexendo com Switch Case
/*
function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            return "Domingo"
            break;
        case 2:
            return "Segunda"
            break;
        case 3:
            return "Terça"
            break;
        case 4:
            return "Quarta"
            break;
        case 5:
            return "Quinta"
            break;
        case 6:
            return "Sexta"
            break;
        case 7:
            return "Sábado"
            break;
        default: // retorno padrão para números de casos não definidos
            return "Dia da semana não encontrado / Inválido"
            break;
    }
}

// chamando a função criada
console.log(diaDaSemana(10))
*/


// Testando a igualdade dos valores com operadores relacionais
let a = "10"
let b = 10
console.log(a == b) // verifica se somente os valores são iguais
console.log(a === b) // verifica se os tipos das variáveis são iguais