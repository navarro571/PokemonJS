class PokemonFilter {
  #filtered;
  constructor(source) {
    this.#filtered = source;
  }

  /**
   *
   * @param {*} param Card key parameter
   * @param {*} op Operation
   * @param {*} value Value to search
   * @returns PokemonFilter
   */
  search(param, op, value) {
    this.#filtered = this.#filtered.filter((card) => {
      let key = param(card);
      switch (op) {
        case "=":
          return key.toUpperCase().includes(value.toUpperCase());
        case ">":
          return key > value;
        case "<":
          return key < value;
      }
    });
    return this;
  }

  get() {
    return this.#filtered;
  }
}

export default PokemonFilter;
