// let palavra = "arara"

// function verificaPalindromo(string) {
//     if (!string) return;

//     return string.split("").reverse().join("") === string;
// }

// console.log(verificaPalindromo(palavra));

// function verificaPalindromo(string) {
//     if (!string) return "String inexistente";

//     for (let letra = 0; letra < string.length / 2; letra++) {
//         if (string[letra] !== string[string.length - 1 - letra]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(verificaPalindromo("arara"))

function trocaArray(arr) {
    if (!arr.length) return -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            console.log("Você já é zero!")
        } else if (arr[i] % 2 === 0) {
            console.log(`Substituindos ${arr[i]} por 0...`)
            arr[i] = 0;
        }
    }
    return  arr;
}

let array = [2,4,7,3,6,8,9];
console.log(trocaArray(array));