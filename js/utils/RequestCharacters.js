import request from './fetchData.js';
import PokemonCard from './PokemonCard.js';

const API = "https://pokeapi.co/api/v2/pokemon";


/**
 * @param {*} offset Offset of request
 * @param {*} amount Request character amount
 * @returns PokemonCard object array
 */
async function requestcharacters(amount) {
    console.time();
    let arrayCharacters = [];
    let requestArray = [];
    for(let i = 0; i < amount; i++){
        const characterData = request(`${API}/${i+1}/`).then(res => {
            return request(`https://pokeapi.co/api/v2/pokemon-form/${i+1}/`).then(r => Object.assign(res, r));
        });
        requestArray.push(characterData);
    }
    await Promise.all(requestArray).then(res => {
        res.forEach(character => {
            const newCharacter = new PokemonCard(character.forms[0].name, 
            { 
                hp: character.stats[0].base_stat,
                attack: character.stats[1].base_stat,
                defense: character.stats[2].base_stat,
                image: character.sprites.front_default,
            });
            arrayCharacters.push(newCharacter);
        });
    });
    console.timeEnd();
    return arrayCharacters;
}

export default requestcharacters;