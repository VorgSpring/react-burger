import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsError,
} from '../actions/ingredients';
import {
  getMainBurger,
} from '../actions/burger';
import { loadIngredients } from '../../api/ingredient';
import { getMainBurger as getMainBurgerHelper } from '../../helpers/burger';

export const getIngredients = () => async (dispatch) => {
  dispatch(getIngredientsRequest());

  try {
    const response = await loadIngredients();
    dispatch(getIngredientsSuccess(response));
    dispatch(getMainBurger(getMainBurgerHelper(response)));
  } catch (error) {
    dispatch(getIngredientsError(error));
  }
};
