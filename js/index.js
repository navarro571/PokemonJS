import requestcharacters from './utils/RequestCharacters.js';
import { addcard } from './utils/DOMModifier.js';

const maxCharactersLoad = 20;

(async function init(){
    const characters = await requestcharacters(maxCharactersLoad);
    characters.forEach((character) => {
        addcard(character);
    });
}())


