let threeDigitID = (id) => (id <= 999 ? `00${id}`.slice(-3) : id);

export const changeId = (id) => {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${threeDigitID(id)}.png`
};
