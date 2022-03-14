import { getBurgerSelector } from '../../selectors/burger';
import { removeBurgerStorage, setBurgerStorage } from '../../helpers/burger';
import {
  REMOVE_BURGER,
  ADD_INGREDIENT_IN_BURGER,
  MOVE_INGREDIENT_IN_BURGER,
  REMOVE_INGREDIENT_IN_BURGER,
} from '../actions/type';

export const burgerMiddleware = ({ getState }) => (next) => (action) => {
  const result = next(action);

  const isBurgerAction = [
    ADD_INGREDIENT_IN_BURGER,
    MOVE_INGREDIENT_IN_BURGER,
    REMOVE_INGREDIENT_IN_BURGER,
  ].includes(action.type);

  if (isBurgerAction) {
    // записываем конфигурацию бургера,
    // чтобы не терялся при перезагрузке страницы
    const burger = getBurgerSelector(getState());
    setBurgerStorage(burger);
  }

  if (action.type === REMOVE_BURGER) {
    removeBurgerStorage();
  }

  return result;
};
