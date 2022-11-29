function carregar() {
    let hour = window.document.getElementById('hora')
    let foto = window.document.getElementById('foto')
    let saudar = window.document.getElementById('saudar')
    const data = new Date()
    const hora = data.getHours()
    const minutos = min(data.getMinutes())
    const segundos = seg(data.getSeconds())
    //const segundos = 1
    hour.innerHTML = `São : ${hora}:${minutos}:${segundos}`
    if (hora >= 6 && hora <= 12) {
        foto.innerHTML = '<img style="border-radius: 50%" width="250" height="250" src="manha.jpg">'
        saudar.innerHTML = `Bom dia!`
        minuto = "0" + minuto
    } else if (hora > 12 && hora < 19) {
        foto.innerHTML = '<img style="border-radius: 50%" width="250" height="250" src="tarde.png">'
        saudar.innerHTML = `Boa tarde!`
    } else if (hora >= 19) {
        foto.innerHTML = '<img style="border-radius: 50%" width="250" height="250" src="noite.jpg">'
        saudar.innerHTML = `Boa noite!`
    } else if (hora >= 0 && hora <= 5) {
        foto.innerHTML = '<img style="border-radius: 50%" width="250" height="250" src="noite.jpg">'
        saudar.innerHTML = `Boa madrugada!`
    } 
} 
function seg(segundos) {
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    return segundos
}
function min(minutos) {
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    return minutos 
}
function h(hora) {
    if (hora < 10) {
        hora = "0" + hora;
    }
    return hora
}
function realTime() {
    setInterval(carregar,1000)
}