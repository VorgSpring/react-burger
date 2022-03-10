import { getBurgerSelector } from '../../selectors/burger';
import {
  ADD_INGREDIENT_IN_BURGER,
  MOVE_INGREDIENT_IN_BURGER,
  REMOVE_INGREDIENT_IN_BURGER,
} from '../actions/type';

export const ingredintsMiddleware = ({ getState }) => (next) => (action) => {
  const result = next(action);

  const isBurgerAction = [
    ADD_INGREDIENT_IN_BURGER,
    MOVE_INGREDIENT_IN_BURGER,
    REMOVE_INGREDIENT_IN_BURGER,
  ].includes(action.type);

  if (isBurgerAction) {
    // записываем конфигурацию бургера,
    // чтобы не терялся при перезагрузке страницы
    localStorage.burger = JSON.stringify(
      getBurgerSelector(getState()),
    );
  }

  return result;
};
