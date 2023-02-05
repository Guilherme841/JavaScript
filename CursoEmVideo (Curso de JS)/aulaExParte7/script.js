var numero = document.querySelector('input#numero')
var select = document.querySelector('select#select')
var resu = document.querySelector('div#resu')
var valores = []
function isnumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inlista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }
}
function adicionar() {
    if (isnumber(numero.value) && !inlista(numero.value,valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado!`
        select.appendChild(item)
        resu.innerHTML = ''
    } 
} 
function finalizar() {
    if (valores.length == 0) {
        alert('[ERRO]')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
            maior = valores[pos] 
            if (valores[pos] < menor) 
            menor = valores[pos] 
        }
        media = soma / tot
        resu.innerHTML = ''
        resu.innerHTML += `<p>Ao todo temos ${tot} números cadastrados!<p>` 
        resu.innerHTML += `<p>O maior numero é ${maior}!<p>` 
        resu.innerHTML += `<p>O menor numero é ${menor}!<p>` 
        resu.innerHTML += `<p>A soma de todos é ${soma}!<p>` 
        resu.innerHTML += `<p>A media é ${media.toFixed(2)}!<p>` 

    }
}
