import type { Middleware } from 'redux';
import { getBurgerSelector } from '../../selectors/burger';
import { removeBurgerStorage, setBurgerStorage } from '../../helpers/burger';
import { BurgerActionTypes } from '../actions/type';
import { TAppDispatch, TRootState } from '../../types/store';

export const burgerMiddleware:
Middleware<TAppDispatch, TRootState> = ({ getState }) => (next) => (action) => {
  const result = next(action);

  const isBurgerAction = [
    BurgerActionTypes.ADD_INGREDIENT_IN_BURGER,
    BurgerActionTypes.MOVE_INGREDIENT_IN_BURGER,
    BurgerActionTypes.REMOVE_INGREDIENT_IN_BURGER,
  ].includes(action.type);

  if (isBurgerAction) {
    // записываем конфигурацию бургера,
    // чтобы не терялся при перезагрузке страницы
    const burger = getBurgerSelector(getState());
    setBurgerStorage(burger);
  }

  if (action.type === BurgerActionTypes.REMOVE_BURGER) {
    removeBurgerStorage();
  }

  return result;
};
