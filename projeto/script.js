const numeroMaximoDePersonagens = 671;
const nome1 = document.querySelector('.nomePersonagem1');
const image1 = document.querySelector('.imagem1');

generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

getCharacter = () => {
    const id = generateRandomNumber();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image1.src = data.image;
        nomeDoPersonagem1 = data.name;
        nome1.innerHTML = `Personagem: ${nomeDoPersonagem1.toUpperCase()}`
    })
}

this.getCharacter();


