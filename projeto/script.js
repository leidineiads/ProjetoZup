getCharacter = () => {
    
    return fetch(`https://rickandmortyapi.com/api/character/1`, {
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