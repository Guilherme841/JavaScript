var numero = document.querySelector("#numero")
var resu = document.querySelector("#resu")
var select = document.getElementById('select')
var cases = []
function isnumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false 
    }
}
function inlist(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }
}
function adicionar() {
    if (isnumber(numero.value) && !inlist (numero.value,cases)) {
        cases.push(Number(numero.value))
        var item = document.createElement('option')
        item.text = `${numero.value} adicionado!`
        select.appendChild(item)
        //resu.innerHTML = ''
    } else {
        alert('[ERRO]')
    }
    numero.focus()
    //resu.innerHTML = ''
}
function finalizar() {
    if (cases.length == 0) {
        alert('[ERRO]')
    } else {
        var tot = cases.length
        var maior = cases[0]
        var menor = cases[0]
        var soma = 0
        var media = 0
        for (let pos in cases) {
            soma += cases[pos]
            if (cases[pos] > maior)
            maior = cases[pos]
            if (cases[pos] < menor)
            menor = cases[pos]
            media = soma / tot
        }
    }
    resu.innerHTML += `<p>${tot}<p>`
    resu.innerHTML += `<p>${soma}<p>`
    resu.innerHTML += `<p>${maior}<p>`
    resu.innerHTML += `<p>${menor}<p>`
    resu.innerHTML += `<p>${media}<p>`
    //resu.innerHTML += `<p>${soma}<p>`
} 
