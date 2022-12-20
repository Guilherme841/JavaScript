function gerar(){
    let nume = window.document.getElementById('numero')
    let sel = window.document.getElementById('select')
    if (nume.value.length == 0) { 
        window.alert('[ERRO] Digite um número!')
    } else {
        let num = Number(nume.value)
        let n = 1
        sel.innerHTML = ''
        while (n <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${n} = ${num*n}`
            item.value = `tab${n}`
            sel.appendChild(item)
            n++
        }
    } 
}