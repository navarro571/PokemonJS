import request from './fetchData.js';
import PokemonCard from './PokemonCard.js';

const API = "https://pokeapi.co/api/v2/pokemon";

/**
 * @param {*} offset Offset of request
 * @param {*} amount Request character amount
 * @returns PokemonCard object array
 */
async function requestcharacters(offset, amount) {
    const data = await request(`${API}/?offset=${offset}&limit=${amount}`);
    let arrayCharacters = [];
    const characterCount = data.results.length;
    for(let i = 0; i < characterCount; i++){
        const characterData = await request(`${API}/${i+1}/`);
        const image = await request(`https://pokeapi.co/api/v2/pokemon-form/${i+1}/`);
        const newCharacter = new PokemonCard(characterData.forms[0].name, 
        { 
            hp: characterData.stats[0].base_stat,
            attack: characterData.stats[1].base_stat,
            defense: characterData.stats[2].base_stat,
            image: image.sprites.front_default,
        });
        arrayCharacters.push(newCharacter);
    }
    return arrayCharacters;
}

export default requestcharacters;