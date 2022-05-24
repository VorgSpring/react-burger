import React from 'react';
import { OrderStatusData, OrderStatuses } from '../../constants/orders/status';

type Props = {
  status: OrderStatuses;
  className?: string;
};

export const OrderStatus = ({ status, className }: Props) => (
  <div
    className={className}
    style={{ color: `${OrderStatusData[status].color}` }}
  >
    {OrderStatusData[status].value}
  </div>
);
