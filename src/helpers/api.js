export const getBodyForCreateOrders = (burger) => JSON.stringify({
  ingredients: burger.ingredients.reduce((acc, item) => {
    acc.push(item._id);
    return acc;
  }, [burger.bun._id]),
});
