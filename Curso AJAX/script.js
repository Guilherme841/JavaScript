let nome = document.querySelector('#inome');
let email = document.querySelector('#iemail');
let form = document.querySelector('#form');

form.addEventListener("submit",function(event) {
    event.preventDefault();

    let dados = {
        nome: nome.value,
        email: email.value
    };
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(dados)
    })
    .then(function (response) {
        return response.json()
    }) 
    .then(function (response) {
        alert("Cadastrado com sucesso!")
    })
})