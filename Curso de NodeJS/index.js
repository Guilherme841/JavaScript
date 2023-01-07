// const {Person} = require("./person");

const connectToDataBase = require('./src/database/connect')

// const person = new Person("Guilherme");

const dotenv = require('dotenv')

dotenv.config();
connectToDataBase();

// console.log(person.sayMyName());

// require("./modules/path");

// require('./modules/fs')

// require('./modules/http')

require('./modules/express')

