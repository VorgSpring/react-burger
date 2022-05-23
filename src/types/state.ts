import { FormStoreNames } from '../constants/forms/store';
import { TFormState } from './forms/state';
import { TIngregient } from './ingredient';
import { TUser } from './user';

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
