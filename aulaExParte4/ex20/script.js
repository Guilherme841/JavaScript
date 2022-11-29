function contar (){
    let ini = window.document.getElementById('txti')
    let fi = window.document.getElementById('txtf')
    let pass = window.document.getElementById('txtp')
    let resu = window.document.getElementById('resultado')
    if (ini.value.length == 0 || fi.value.length == 0 || pass.value.length == 0) {
    window.alert('[ERRO] Faltam dados!') 
    } else {
        resu.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fi.value)
        let p = Number(pass.value)
        if (p <= 0) {
            window.alert('Passo invalido, considerando PASSO 1!')
            p = 1
        }
        if (i < f) {
            let c = i
            while(c <= f) {
                resu.innerHTML += `${c} 👉 `
                c += p 
            }
        } else {
            let c = i
        while (c >= f) {
            resu.innerHTML += `${c} 👉 ` 
            c -= p
        } 
    }
  } resu.innerHTML += '🖐'
}