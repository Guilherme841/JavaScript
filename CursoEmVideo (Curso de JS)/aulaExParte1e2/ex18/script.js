function carregar(){

    const msg = window.document.getElementById('hora')
    let img = window.document.getElementById('fot')
    const data = new Date()
    const hora = data.getHours()
    const minutos = data.getMinutes() 
    const segundos = data.getSeconds()
    msg.innerHTML = `São exatamente ${hora}:${minutos}:${segundos} horas.`
    if (hora >= 0 && hora <= 12)
    {  img.innerHTML = '<img style="border-radius: 50%" width="250" height="250" src="manha.jpg">'
        document.body.style.background = '#ffae59'
        var saudo = document.getElementById('saudar')
        saudo.innerHTML = 'Bom dia!'   
    }
    else if (hora >= 13 && hora <= 18)
    {
        img.innerHTML = '<img style="border-radius: 50%" width="250" height="250" src="tarde.png">'
        document.body.style.background = '#7c7a76'
        var saudo = document.getElementById('saudar')
        saudo.innerHTML = 'Boa tarde!'
    }
    else if (hora >= 19 && hora <= 23)
   {
        img.innerHTML = '<img style="border-radius: 50%" width="250" height="250" src="noite.jpg">'
        document.body.style.background = '#4e87b4'
        var saudo = document.getElementById('saudar')
        saudo.innerHTML = 'Boa noite!'
   }
}