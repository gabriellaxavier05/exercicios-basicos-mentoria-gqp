// Mexendo com Switch Case
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