import { ConstructorElementTypes } from '../../constants/constructor';
import { TBurger } from '../../types/burger';
import { BurgerActionTypes } from './type';
import {
  TSetBurger,
  TRemoveBurger,
  TAddIngredientInBurger,
  TMoveIngredientInBurger,
  TRemoveIngredientInBurger,
} from '../../types/actions/burger';

export const setBurger = (burger: TBurger): TSetBurger => ({
  type: BurgerActionTypes.SET_BURGER,
  payload: burger,
});

export const removeBurger = (): TRemoveBurger => ({
  type: BurgerActionTypes.REMOVE_BURGER,
});

export const addIngredientInBurger = (type: ConstructorElementTypes, id: string, key: string): TAddIngredientInBurger => ({
  type: BurgerActionTypes.ADD_INGREDIENT_IN_BURGER,
  payload: { type, id, key },
});

export const moveIngredientInBurger = (currentIndex: number, moveIndex: number): TMoveIngredientInBurger => ({
  type: BurgerActionTypes.MOVE_INGREDIENT_IN_BURGER,
  payload: { currentIndex, moveIndex },
});

export const removeIngredientInBurger = (type: ConstructorElementTypes, index: number): TRemoveIngredientInBurger => ({
  type: BurgerActionTypes.REMOVE_INGREDIENT_IN_BURGER,
  payload: { type, index },
});
