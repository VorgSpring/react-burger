export enum OrderStatuses {
  CREATED = 'created',
  PANDING = 'pending',
  DONE = 'done',
  CANCEL = 'cancel',
}

type TOrderStatusData = {
  [K in OrderStatuses]: {
    value: string,
    color: string
  }
};
export const OrderStatusData: TOrderStatusData = {
  [OrderStatuses.CREATED]: {
    value: 'Создан',
    color: '#F2F2F3',
  },
  [OrderStatuses.PANDING]: {
    value: 'Готовится',
    color: '#DBD702',
  },
  [OrderStatuses.DONE]: {
    value: 'Выполнен',
    color: '#00CCCC',
  },
  [OrderStatuses.CANCEL]: {
    value: 'Отменён',
    color: '#E52B1A',
  },
};

type TOrderFeedStatusData = {
  [K in OrderStatuses]?: {
    title: string,
    color: string
  }
};
export const OrderFeedStatusData: TOrderFeedStatusData = {
  [OrderStatuses.DONE]: {
    title: 'Готовы:',
    color: '#00CCCC',
  },
  [OrderStatuses.PANDING]: {
    title: 'В работе:',
    color: '#DBD702',
  },
};
