import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ru';

import { OrdersTypes } from '../../constants/orders/types';
import { OrdersSoketUrls } from '../../constants/orders/api';
import { getPreparedAccessToken } from '../tokens';
import { TBackOrders, TOrders, TOrdersFeed } from '../../types/order';
import { ORDER_API_URL } from '../../constants/api';
import { OrderStatuses } from '../../constants/orders/status';
import { OrdersPaths } from '../../constants/orders/path';

dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ru');

export const preparedOrderIngredients = (ids: string[]) => (
  ids.reduce((acc, id) => {
    if (acc[id]) {
      acc[id] += 1;
    } else {
      acc[id] = 1;
    }

    return acc;
  }, {} as { [K in string]: number })
);

export const getWsUrl = (wsType: OrdersTypes) => {
  const wsUrl = OrdersSoketUrls[wsType];

  if (OrdersTypes.MY) {
    return `${wsUrl}?token=${getPreparedAccessToken()}`;
  }

  return wsUrl;
};

type TGetPreparedOrderData = (ingredients: TBackOrders) => TOrders;
export const getPreparedOrderData: TGetPreparedOrderData = (
  {
    ingredients,
    _id,
    status,
    number,
    name,
    createdAt,
    updatedAt,
  },
) => {
  const createdDate = dayjs(createdAt);
  const updateDate = dayjs(updatedAt);

  return (
    {
      ingredients: ingredients.filter((ingredient) => ingredient !== null),
      id: _id,
      status,
      number,
      name,
      createdAt: `${createdDate.fromNow()}, i-${createdDate.format('z')}`,
      updatedAt: `${updateDate.fromNow()}, i-${updateDate.format('z')}`,
    }
  );
};

type TGetPreparedOrdersData = (ingredients: TBackOrders[], isReverce: boolean) => TOrders[];
export const getPreparedOrdersData: TGetPreparedOrdersData = (orders, isReverce) => {
  const preparedOrders = orders.map(getPreparedOrderData);

  return isReverce ? preparedOrders.reverse() : preparedOrders;
};

type TGetOrdersFeed = (orders: TOrders[] | null) => TOrdersFeed | null;
export const getOrdersFeed: TGetOrdersFeed = (orders) => {
  if (orders === null) {
    return null;
  }

  return orders.reduce((ordersFeed, order) => {
    if (order.status === OrderStatuses.PANDING) {
      ordersFeed[OrderStatuses.PANDING]?.push(order.number);
    }

    if (order.status === OrderStatuses.DONE) {
      ordersFeed[OrderStatuses.DONE]?.push(order.number);
    }

    return ordersFeed;
  }, {
    [OrderStatuses.DONE]: [],
    [OrderStatuses.PANDING]: [],
  } as TOrdersFeed);
};

type TGetOrderPath = (number: number, type: OrdersTypes) => string;
export const getOrderPath: TGetOrderPath = (number, type) => `${OrdersPaths[type]}/${number}`;

type TGetOrderApiUrl = (number: string) => string;
export const getOrderApiUrl: TGetOrderApiUrl = (number) => `${ORDER_API_URL}/${number}`;
