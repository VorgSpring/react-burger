import {
  GET_MAIN_BURGER,
  ADD_INGREDIENT_IN_BURGER,
  REMOVE_INGREDIENT_IN_BURGER,
} from '../actions/type';
import { ConstructorElementTypes } from '../../constants/constructor';
import { burgerState } from './initialState';

export const burgerReducer = (state = burgerState, action) => {
  let newState;

  switch (action.type) {
    case GET_MAIN_BURGER:
      newState = localStorage.burger ? JSON.parse(localStorage.burger) : state;
      break;

    case ADD_INGREDIENT_IN_BURGER:
      newState = {
        ...state,
        [action.payload.type]:
          action.payload.type === ConstructorElementTypes.BUN
            ? action.payload.id
            : [
              ...state.ingredients.slice(0, action.payload.index),
              action.payload.id,
              ...state.ingredients.slice(action.payload.index),
            ],
      };

      // записываем конфигурацию бургера,
      // чтобы не терялся при перезагрузке страницы
      localStorage.burger = JSON.stringify(newState);
      break;

    case REMOVE_INGREDIENT_IN_BURGER:
      newState = {
        ...state,
        [action.payload.type]:
          action.payload.type === ConstructorElementTypes.BUN
            ? null
            : state.ingredients.filter(
              (_, index) => index !== action.payload.index,
            ),
      };

      // записываем конфигурацию бургера,
      // чтобы не терялся при перезагрузке страницы
      localStorage.burger = JSON.stringify(newState);
      break;

    default:
      newState = { ...state };
      break;
  }

  return newState;
};
