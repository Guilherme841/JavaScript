// let numero = [0,1,2,3,4,5,6,7,8,9,10]

// function aleatorio(min, max) {
//     return Math.random() * (max - min) + min
// }

// console.log(aleatorio(0,10));

function aleatorio (min = 0, max = 10) {
    let numero = Math.random() * (max - min) + min
    random = numero.toFixed(0)
    resultado.innerHTML = 'Chute um número!'
}

function chutar() {
    let resultado = document.getElementById('resultado')
    let chute = document.getElementById('chute')
    let shot = Number(chute.value)
    if (shot < random) {
        resultado.innerHTML = `Seu número é menor, tente outro!`
    } else if (shot > random) {
        resultado.innerHTML = `Seu número é maior, tente outro!`
    } else {
        var confirm = window.confirm('Chute correto! Jogar novamente?')
    } if (confirm == true) {
        document.body.onload(aleatorio())
    }
}
