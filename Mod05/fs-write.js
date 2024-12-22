const fs = require('fs') // o require é usado para importar módulos do NodeJS e, nesse caso, está importando o módulo FileSystem

fs.writeFile('msg.txt', "Oi, Sophie, minha gatinhaaa!", (err) => { // msg.txt é o arquivo a ser criado, 'Oi, Sophie...' é o conteúdo desse arquivo e err é a variável de erro
    if (err) {
        throw err; // se tiver algum erro, o erro será apresentado/informado
    }
    else {
        console.log('O arquivo foi salvo!') // se não tiver erro, essa msg será exibida
    }
})