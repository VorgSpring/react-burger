export const getIngredientById = (ingredients, id) => {
  if (!id) {
    return null;
  }

  return ingredients.find(({ _id }) => _id === id);
};
