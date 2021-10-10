class PokemonCard {
    #name;
    #stats;

    /**
     * 
     * @param {string} name Pokemon name
     * @param {{hp, attack, defense, image}} stats Pokemon stats 
     */
    constructor(name, stats){
        this.#name = name;
        this.#stats = stats;
    }

    get name() {
        return this.#name; 
    }

    get stats() {
        return this.#stats;
    }
}

export default PokemonCard;