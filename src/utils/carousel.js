const getCarousleItemsAmount = (matches) => {
  return matches.small ? 9 : matches.medium ? 5 : matches.large ? 3 : 3;
};

const calculateCardsPerPage = (items) => {
  return items === 9 ? 1 : items === 5 ? 2 : items === 3 ? 3 : 3;
};

export { getCarousleItemsAmount, calculateCardsPerPage };
