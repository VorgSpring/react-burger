import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';
import { TAppDispatch, TAppThunk, TRootState } from '../types/store';

export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook;

export const useDispatch = () => dispatchHook<TAppDispatch | TAppThunk>();
