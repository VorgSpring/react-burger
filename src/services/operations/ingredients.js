import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsError,
} from '../actions/ingredients';
import { loadIngredients } from '../../api/ingredient';

export const getIngredients = () => (dispatch) => {
  dispatch(getIngredientsRequest());

  return loadIngredients()
    .then((response) => {
      dispatch(getIngredientsSuccess(response));
    })
    .catch((error) => {
      dispatch(getIngredientsError(error));
    });
};
