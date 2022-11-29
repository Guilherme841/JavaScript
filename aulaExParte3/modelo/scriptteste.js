function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let datan = document.getElementById('data')
    let resultado = document.getElementById('resultado')
    if (datan.value.length == 0) {
        alert('[ERRO]')
    } else {
        let genes = document.getElementsByName('botao')
        let idade = ano - Number(datan.value)
        let genero = ''
        if (genes[0].checked) {
            if (idade >=0 && idade < 10) {
                resultado.innerHTML = '<img src="foto-bebe-m.png">'
            }
        } else if (genes[1].checked) {
            if (idade >=0 && idade < 10) {
                resultado.innerHTML = '<img src="foto-bebe-f.png">'
            }
        }
    }
}