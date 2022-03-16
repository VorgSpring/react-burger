import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsError,
} from '../actions/ingredients';
import { setBurger } from '../actions/burger';
import { getPreparedIngredients } from '../../helpers/ingredients';
import { getBurgerStorage } from '../../helpers/burger';
import { loadIngredients } from '../../api/ingredient';

export const getIngredients = () => async (dispatch) => {
  dispatch(getIngredientsRequest());

  try {
    const { data } = await loadIngredients();
    const preparedIngredients = getPreparedIngredients(data);
    dispatch(getIngredientsSuccess(preparedIngredients));

    const burger = getBurgerStorage();

    if (burger) {
      dispatch(setBurger(burger));
    }
  } catch ({ message }) {
    dispatch(getIngredientsError(message));
  }
};
