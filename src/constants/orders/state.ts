import { TOrdersState } from '../../types/order';

export const InitialState: TOrdersState = {
  orders: null,
  total: null,
  totalToday: null,
  isOpen: false,
  isUpdating: false,
  isClosed: true,
  isConnecting: false,
  error: null,
};
