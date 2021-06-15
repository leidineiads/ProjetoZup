const numeroMaximoDePersonagens = 671;

const nome1 = document.querySelector('.nomePersonagem1');
const nome2 = document.querySelector('.nomePersonagem2');
const nome3 = document.querySelector('.nomePersonagem3');
const nome4 = document.querySelector('.nomePersonagem4');


const image1 = document.querySelector('.imagem1');
const image2 = document.querySelector('.imagem2');
const image3 = document.querySelector('.imagem3');
const image4 = document.querySelector('.imagem4');

let nomeDoPersonagem1;
let nomeDoPersonagem2;
let nomeDoPersonagem3;
let nomeDoPersonagem4;

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

getCharacter2 = () => {
    const id = generateRandomNumber();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image2.src = data.image;
        nomeDoPersonagem2 = data.name;
        nome2.innerHTML = `Personagem: ${nomeDoPersonagem2.toUpperCase()}`
    })
}

getCharacter3 = () => {
    const id = generateRandomNumber();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image3.src = data.image;
        nomeDoPersonagem3 = data.name;
        nome3.innerHTML = `Personagem: ${nomeDoPersonagem3.toUpperCase()}`
    })
}

getCharacter4 = () => {
    const id = generateRandomNumber();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image4.src = data.image;
        nomeDoPersonagem4 = data.name;
        nome4.innerHTML = `Personagem: ${nomeDoPersonagem4.toUpperCase()}`
    })
}

this.getCharacter();
this.getCharacter2();
this.getCharacter3();
this.getCharacter4();



