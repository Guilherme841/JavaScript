const array = [ 2 , 7 , 8 , 4 , 9 , 12 ]

function numerosPares(arr) {
    return arr.filter((item) => item % 2 === 0);
}

// function callback(item) {
//     return item % 2 === 0;
// }

console.log(numerosPares(array))