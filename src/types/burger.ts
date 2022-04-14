export type TBurgerBun = string | null;
export type TBurgerIngredient = {
  id: string;
  key: string;
}

export type TBurgerIngredients = TBurgerIngredient[] | [];

export type TBurger = {
  bun: TBurgerBun;
  ingredients: TBurgerIngredients,
};
