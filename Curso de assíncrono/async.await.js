async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('resolvida!');
        }, 3000);
    })

    const resolved = await myPromise
    .then((result) => result + 'Passando pelo then')
    .then((result) => result + 'ultimo then e ok')
    .catch((error) => console.log(error.message))

    return resolved;
    // funções assíncronas precisam das duas palavras chaves await e async;
    // await para o código para pegar o resultado da promise 
}