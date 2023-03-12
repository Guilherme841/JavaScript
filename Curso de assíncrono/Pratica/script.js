const BASE_URL = "https://reqres.in/api/users?page=2";
const gato = window.document.getElementById("cat");
const change_cat = window.document.getElementById("change-cat");

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    const avatares = json.data.map(item => item.avatar);
    console.log(avatares)
    return avatares;
  } catch (error) {
    console.log(error.message);
    throw new Error("Não foi possível carregar a imagem do gato :(");
  }
};

const loadImg = async () => {
  gato.src = await getCats();
};

change_cat.addEventListener("click", loadImg);

loadImg();
