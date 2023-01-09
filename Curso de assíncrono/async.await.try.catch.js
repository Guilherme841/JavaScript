async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('resolvida!');
        }, 3000);
    })

    let result;

    try {
        result = await Promise
        .then((result) => result + 'Passando pelo then!')
        .then((result) => result + 'ultimo then ok')
    } catch (error) {
        result = error.message;
    }
    return result;
}