const mongoose = require('mongoose');

const connectToDataBase = async() => {
    await mongoose.connect(`mongodb+srv://${process.env.user_name}:${process.env.senha_pass}@cursonodejs.rljtvsi.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log('Ocorreu um erro: ', error)
        }
        return console.log('Conexão ao banco de dados com sucesso!')
    })
}

module.exports = connectToDataBase