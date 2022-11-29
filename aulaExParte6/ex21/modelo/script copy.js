function Gerar() {
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('tabuada')
    if (numero.value.length == 0) {
        alert('[ERRO]')
    } else {
        let num = Number(numero.value)
        let x = 1
        tabuada.innerHTML = ''
        while (x <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${x} = ${num*x}`
            tabuada.appendChild(item)
            x++
        }
    } 
}
