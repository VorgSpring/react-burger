import { ConstructorElementTypes } from '../../constants/constructor';
import { TBurger } from '../burger';
import { BurgerActionTypes } from '../../services/actions/type';

export type TSetBurger = {
  type: BurgerActionTypes.SET_BURGER;
  payload: TBurger;
};

export type TRemoveBurger = {
  type: BurgerActionTypes.REMOVE_BURGER;
};

export type TAddIngredientInBurger = {
  type: BurgerActionTypes.ADD_INGREDIENT_IN_BURGER;
  payload: {
    type: ConstructorElementTypes;
    id: string;
    key: string;
  };
};

export type TMoveIngredientInBurger = {
  type: BurgerActionTypes.MOVE_INGREDIENT_IN_BURGER;
  payload: {
    currentIndex: number;
    moveIndex: number;
  };
};

export type TRemoveIngredientInBurger = {
  type: BurgerActionTypes.REMOVE_INGREDIENT_IN_BURGER;
  payload: {
    type: ConstructorElementTypes;
    index: number
  };
};

export type TBurgerActionTypes = TSetBurger
| TRemoveBurger
| TAddIngredientInBurger
| TMoveIngredientInBurger
| TRemoveIngredientInBurger;
