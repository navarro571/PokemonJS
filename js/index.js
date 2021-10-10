import requestcharacters from './utils/RequestCharacters.js';
import { addcard } from './utils/DOMModifier.js';

let requestCharactersOffset = 0;
const maxCharactersLoad = 40;

(async function init(){
    const characters = await requestcharacters(requestCharactersOffset, maxCharactersLoad);
    characters.forEach((character) => {
        addcard(character);
    });
}())


