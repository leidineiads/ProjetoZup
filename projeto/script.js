const numeroMaximoDePersonagens = 671;

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
        console.log(data);
    })
}

this.getCharacter();


