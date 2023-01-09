const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const gato = window.document.getElementById('cat')
const change_cat = window.document.getElementById('change-cat')

const getCats = async () => {
    try { 
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl; 
    } catch (error) {
        console.log(error.message);
    }
}

const loadImg = async () => {
    gato.src = await getCats(); 
}

change_cat.addEventListener('click', loadImg);

loadImg();