import { FormStoreNames } from '../constants/forms/store';
import { TFormState } from './forms/state';
import { TIngregient } from './ingredient';
import { TBurger } from './burger';
import { TUser } from './user';
import { OrderStoreNames } from '../constants/orders/store';
import { TOrdersState } from './order';

export type TIngredientsState = {
  items: TIngregient[] | null;
  isLoading: boolean;
  error: string | null;
};

export type TOrderState = {
  currentOrder: number | null;
  orders: number[] | [],
  isCreating: boolean;
  error: string | null;
};

export type TFormStates = {
  [K in FormStoreNames]: TFormState;
};

export type TUserState = TUser & {
  isRequest: boolean;
  error: string | null;
};

export type TStore = {
  ingredients: TIngredientsState;
  burger: TBurger;
  order: TOrderState;
  forms: TFormStates;
  user: TUserState;
  [OrderStoreNames.ALL]: TOrdersState;
  [OrderStoreNames.MY]: TOrdersState;
};
