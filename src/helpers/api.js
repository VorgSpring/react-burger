export const getIngredientIds = (burger) => JSON.stringify({
  ingredients: [
    ...burger.ingredients,
    burger.bun.id,
  ],
});
