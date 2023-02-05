const mongoose = require('mongoose');

const connectToDataBase = async() => {
    await mongoose.connect(`mongodb+srv://admin:admin123@teste.sre0esu.mongodb.net/?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log('Ocorreu um erro: ', error)
        }
        return console.log('Conexão ao banco de dados com sucesso!')
    })
}

module.exports = connectToDataBase