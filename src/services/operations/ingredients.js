import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsError,
} from '../actions/ingredients';
import { setBurger } from '../actions/burger';
import { getPreparedIngredients } from '../../helpers/ingredients';
import { loadIngredients } from '../../api/ingredient';

export const getIngredients = () => async (dispatch) => {
  dispatch(getIngredientsRequest());

  try {
    const { data } = await loadIngredients();
    const preparedIngredients = getPreparedIngredients(data);
    dispatch(getIngredientsSuccess(preparedIngredients));

    if (localStorage.burger) {
      dispatch(setBurger(JSON.parse(localStorage.burger)));
    }
  } catch ({ message }) {
    dispatch(getIngredientsError(message));
  }
};
