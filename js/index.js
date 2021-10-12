import requestcharacters from "./utils/RequestCharacters.js";
import * as DOMModifier from "./utils/DOMModifier.js";
import PokemonFilter from "./utils/Filter.js";

const btn_filter = document.getElementById("btn-filter");
const input_name = document.getElementById("input-name");
const input_hp = document.getElementById("input-hp");
const input_attack = document.getElementById("input-attack");
const input_defense = document.getElementById("input-defense");

const maxCharactersLoad = 20;
let cardList = [];

btn_filter.addEventListener("click", FilterClickEvent);

(async function init() {
  cardList = await requestcharacters(maxCharactersLoad);
  LoadCard(cardList);
})();

function FilterClickEvent() {
  DOMModifier.clearContainer();
  const filter = new PokemonFilter(cardList);
  LoadCard(
    filter
      .search((x) => x.name, "=", input_name.value)
      .search((x) => x.stats.hp, ">", input_hp.value)
      .search((x) => x.stats.attack, ">", input_attack.value)
      .search((x) => x.stats.defense, ">", input_defense.value)
      .get()
  );
}

function LoadCard(cards) {
  if (cards != undefined) cards.forEach((card) => DOMModifier.addcard(card));
}
