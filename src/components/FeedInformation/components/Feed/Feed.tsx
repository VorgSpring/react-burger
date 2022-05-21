import React from 'react';
import cn from 'classnames';
import { OrderFeedStatusData, OrderStatuses } from '../../../../constants/orders/status';
import styles from './Feed.module.css';

type Props = {
  orders: number[] | [];
  status: OrderStatuses;
};
export const Feed = ({ orders, status }: Props) => {
  const { title, color } = OrderFeedStatusData[status] || {};

  return (
    <div className={cn(styles.root, 'mr-9')}>
      <h4 className="text text_type_main-medium mb-6">
        {title}
      </h4>

      <div className={styles.container}>
        {orders.slice(0, 10).map((order) => (
          <span key={order} className="text text_type_digits-default mb-2" style={{ color }}>
            {order}
          </span>
        ))}
      </div>
    </div>
  );
};
