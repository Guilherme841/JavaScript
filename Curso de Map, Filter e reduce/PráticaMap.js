const maça = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value
    }, thisArg);
}

const numeros = [1,2]

console.log('This => maça',mapComThis(numeros,maça))
console.log('This => laranja',mapComThis(numeros,laranja))

function mapSemThis(arr) {
   return arr.map(function(numeros) {
    return numeros * 2
   })
}

const array = [1,2 ,3 ,4 ,5]
console.log(mapSemThis(array))
