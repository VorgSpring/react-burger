import {
  GET_MAIN_BURGER,
  ADD_INGREDIENT_IN_BURGER,
  MOVE_INGREDIENT_IN_BURGER,
  REMOVE_INGREDIENT_IN_BURGER,
} from '../actions/type';
import { ConstructorElementTypes } from '../../constants/constructor';
import { burgerState } from './initialState';
import { arrayMove } from '../../helpers/array';

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
              ...state.ingredients,
              {
                id: action.payload.id,
                key: action.payload.key,
              },
            ],
      };

      // записываем конфигурацию бургера,
      // чтобы не терялся при перезагрузке страницы
      localStorage.burger = JSON.stringify(newState);
      break;

    case MOVE_INGREDIENT_IN_BURGER:
      newState = {
        ...state,
        ingredients: arrayMove(
          state.ingredients,
          action.payload.currentIndex,
          action.payload.moveIndex,
        ),
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
