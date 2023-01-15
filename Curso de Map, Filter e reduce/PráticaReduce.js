function somaArrays(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current 
    })
}

const array = [2,2,2,2]

console.log(somaArrays(array))




const lista = [
    {
        nome: 'Sucrilhos',
        preço: 20
    },
    {
        nome: 'Pão',
        preço: 10
    },
    {
        nome: 'Café',
        preço: 15
    },
    {
        nome: 'Leite',
        preço: 90
    }
]

const saldo = 500

function mercadoLista(lista,saldo) {
    return lista.reduce(function(prev, current) {
        return prev - current.preço
    }, saldo)
}

console.log(mercadoLista(lista,saldo))
