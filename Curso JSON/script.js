const formataçao = [
    {
    nome: 'Guilherme',
    idade: 18,
    esta_trabalhando: false,
    detalhes_profissao: {
        profissao: 'front-end',
        experiencia: '5 anos',
        formação: 'autodidata'
    },
    hobbies: ['Jogar', 'Estudar', 'ler mangas'],
    },
    {
    nome: 'joão',
    idade: 22,
    esta_trabalhando: null,
    detalhes_profissao: {
        profissao: 'null',
        experiencia: 'null',
        formação: 'null'
    },
    hobbies: ['caçar', 'desenhar'],
    },
]

// JSON
// converter objeto para JSON
const jsonData = JSON.stringify(formataçao);

console.log(jsonData);

// converter jSON para objeto 

const objData = JSON.parse(jsonData);

console.log(objData);

objData.map((formataçao) => {
    console.log(formataçao.nome)
});