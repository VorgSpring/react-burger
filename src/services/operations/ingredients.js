import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsError,
} from '../actions/ingredients';
import { getMainBurger } from '../actions/burger';
import { getPreparedIngredients } from '../../helpers/ingredients';
import { loadIngredients } from '../../api/ingredient';

export const getIngredients = () => async (dispatch) => {
  dispatch(getIngredientsRequest());

  try {
    const response = await loadIngredients();
    const preparedIngredients = getPreparedIngredients(response);
    dispatch(getIngredientsSuccess(preparedIngredients));
    dispatch(getMainBurger());
  } catch (error) {
    dispatch(getIngredientsError(error));
  }
};
