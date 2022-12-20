function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pulo = document.getElementById('pulo')
    let resultado = document.getElementById('resultado')
    if (inicio.value.length == 0 && fim.value.length == 0 && pulo.value.length == 0) {
        alert('[ERRO]')
    } else {
        resultado.innerHTML = 'Contador:'
        let start = Number(inicio.value)
        let end = Number(fim.value)
        let jump = Number(pulo.value)
        if (start < end) {
            while (start <= end) {
                resultado.innerHTML += `${start},`
                start += jump
            }
        } else if (start > end) {
            while (start >= end) {
                resultado.innerHTML += `${start},`
                start -= jump
            }
        }
    }
}
/*

    }
    else {
        contando()
    }
    
    
    function contando() {
        res.innerHTML = 'Contando'
        if (inicio > fim) {
            while (inicio >= fim) {
                res.innerHTML += `&#128073 ${inicio} `
                inicio -= passo
            } 
        } else {
            res.innerHTML = 'Contando:<br>'
            while (inicio <= fim) {
                res.innerHTML += `&#128073 ${inicio} `
                inicio += passo
            }
            
        }res.innerHTML += "&#127937"
    }

} */