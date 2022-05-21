import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import { TStore } from './store';
import { TBurgerActionTypes } from './actions/burger';
import { TIngredientActionTypes } from './actions/ingredients';
import { TOrderActionTypes } from './actions/order';
import { TUserActionTypes } from './actions/user';
import { TFormAtionsCreator } from './forms/actions';
import { TOrderAtionsCreator } from './order';

export type TApplicationActions = TBurgerActionTypes
| TIngredientActionTypes
| TOrderActionTypes
| TUserActionTypes
| TFormAtionsCreator
| TOrderAtionsCreator;

export type TGetState = () => TStore;

export type TAppThunk<TReturn = void> =
  ActionCreator<ThunkAction<TReturn, TStore, unknown, TApplicationActions>>;

export type TAppDispatch = Dispatch<TApplicationActions>;
