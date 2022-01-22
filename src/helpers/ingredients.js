export const getIngredientById = (ingredients, id) => ingredients.find(({ _id }) => _id === id);
