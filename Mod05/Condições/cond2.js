// Criando uma funlção com if-else para comparar números
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