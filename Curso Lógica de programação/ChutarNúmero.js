// let numero = [0,1,2,3,4,5,6,7,8,9,10]

// function aleatorio(min, max) {
//     return Math.random() * (max - min) + min
// }

// console.log(aleatorio(0,10));

function aleatorio (min = 0, max = 10) {
    var numero = Math.random() * (max - min) + min
    random = numero.toFixed(0)
}

function chutar() {
    let resultado = document.getElementById('resultado')
    let chute = document.getElementById('chute')
    let shot = Number(chute.value)
    if (shot == random) {
        resultado.innerHTML = `Chute correto!`
    } else {
        resultado.innerHTML = `Chute errado!`
    }
}
