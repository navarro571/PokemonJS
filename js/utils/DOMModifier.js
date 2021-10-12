
const container = document.getElementById("card-container");

/**
 * 
 * @param {PokemonCard} card
 */
export function addcard(card) {
    container.innerHTML += 
    ` <div class="card">
        <div class="header">
            <img loading="lazy" src="${card.stats.image}" alt="Pokemon image">
        </div>
        <div class="info">
            <div class="pokemon-info">
                <p>${(card.name).toUpperCase()}</p>
                <p>${card.stats.hp}</p>
            </div>
            <div class="stats">
                <div class="stat">
                    <p class="value">${card.stats.attack}</p>
                    <p>Attack</p>
                </div>
                <div class="stat">
                    <p class="value">${card.stats.defense}</p>
                    <p>Defense</p>
                </div>
            </div>
        </div>
    </div>
    `
}

export function clearContainer(){
    container.innerHTML = '';
}