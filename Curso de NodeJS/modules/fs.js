const fs = require('fs')
const { dirname } = require('path')
const path = require('path')

// criar uma pasta 
// fs.mkdir(path.join(__dirname, "/Teste2"),(error) => {
//     if (error) {
//     return console.log('erro: ', error)
//     }

//     console.log('Pasta criada com sucesso')
// });

// Criar um arquivo "é necessario criar a pasta antes de criar o arquivo!"
fs.writeFile(path.join(__dirname, 'Teste2', 'teste2.html'), 'Hello node!', (error) => {
    if (error) {
    return console.log('Erro', error)
    }
    console.log('Arquivo criado com sucesso')
})

// Adicionando um arquivo
fs.appendFile(path.join(__dirname, '/teste2', 'teste2.html') ,' Hello world!', (error) => {
    if (error) {
        return console.log('Erro', error)
    }

    console.log('Adicionado com sucesso')
}) 

// Ler aquivos

fs.readFile(path.join(__dirname , '/Teste2', 'teste2.html'), "UTF-8", (error,data) => {
    if (error) {
        return console.log('Erro, ', error)
    }
    console.log(data)
})
