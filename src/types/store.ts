import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';
import { rootReducer } from '../services/reducers';
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

export type TRootState = ReturnType<typeof rootReducer>;

export type TGetState = () => TRootState;

export type TAppThunk<TReturn = void> =
  ActionCreator<ThunkAction<TReturn, TRootState, Action, TApplicationActions>>;

export type TAppDispatch = Dispatch<TApplicationActions>;
