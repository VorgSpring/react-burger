export const getBodyForCreateOrders = (burger) => ({
  ingredients: burger.ingredients.map((item) => item._id).push(burger.bun._id),
});
