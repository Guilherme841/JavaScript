fetch(url, options)
    .then(reponse => Response.json())
    .then(json => console.log(json))
    // fetch retorna promise entao é necessário uso do await