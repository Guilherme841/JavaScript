let nome = document.querySelector("#inome");
let email = document.querySelector("#iemail");
let form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // evita mandar form de prosseguir com links.

  let dados = {
    nome: nome.value,
    email: email.value,
  };
  fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify(dados),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      alert("Cadastrado com sucesso!");
      // console.log(JSON.stringify(dados))
      // let {nome} = dados;
      // console.log(nome);
    });
});
