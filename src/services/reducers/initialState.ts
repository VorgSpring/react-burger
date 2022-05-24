import { TBurger } from '../../types/burger';
import { TIngredientsState, TOrderState, TUserState } from '../../types/state';

export const IngredientsState: TIngredientsState = {
  items: null,
  isLoading: false,
  error: null,
};

export const BurgerState: TBurger = {
  bun: null,
  ingredients: [],
};

export const CurrentIngredientState = null;

export const OrderState: TOrderState = {
  currentOrder: null,
  orders: [],
  isCreating: false,
  error: null,
};

export const UserState: TUserState = {
  isRequest: false,
  email: null,
  name: null,
  error: null,
};
