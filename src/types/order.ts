import { OrderStatuses } from '../constants/orders/status';

export type TOrders = {
  ingredients: string[];
  id: string;
  status: OrderStatuses;
  number: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TOrdersFeed = {
  [K in OrderStatuses]?: number[];
};

export type TBackOrders = {
  ingredients: string[];
  _id: string;
  status: OrderStatuses;
  number: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TOrder = {
  number: number;
};

export type TOrderResponce = {
  order: TOrder;
};

export type TOrdersResponce = {
  orders: TBackOrders[];
};

export type TOrderAtionsPayloads = {
  orders?: TOrders[],
  total?: number;
  totalToday?: number;
  error?: string;
};

export type TOrderAtionsCreator = {
  type: string;
  payload?: TOrderAtionsPayloads | undefined;
};

export type TOrdersState = {
  orders: TOrders[] | null,
  total: number | null;
  totalToday: number | null;
  isOpen: boolean;
  isUpdating: boolean;
  isClosed: boolean;
  isConnecting: boolean;
  error: string | null;
};
