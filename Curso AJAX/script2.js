let botao = document.querySelector('#carregar')
let lista = document.querySelector('#lista')

botao.addEventListener("click", function() {
    fetch('https://reqres.in/api/users?page=2')
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        response.data.forEach(function(user) {
            let item = document.createElement('li');
            item.classList.add("item");
            item.innerHTML = '<img src="'+user.avatar+'" /<span>'+user.first_name+'</span>';
            lista.appendChild(item);
        })
    })
})