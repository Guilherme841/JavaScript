fetch('https://endereço-api.com/', {
    method: 'GET',
    cache: 'no-cache',
})
.then(reponse => Response.json())
.then(json => console.log(json))

// retorna uma promise await necessario

fetch('https://endereço-apis.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
.then(response => responde.json())
.then(json => console.log(json))

// retorna uma promise await necessario
// Sempre tratar os dados recebendo e mandando