import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import Feed from '../Feed';
import { getOrderFeedSelector } from '../../../../selectors/order';
import { OrderStatuses } from '../../../../constants/orders/status';
import styles from './Feeds.module.css';

type Props = {
  className: string;
};
export const Feeds = ({ className }: Props) => {
  const ordersFeed = useSelector(getOrderFeedSelector);

  if (ordersFeed === null) {
    return null;
  }

  return (
    <div className={cn(styles.root, className)}>
      {Object.keys(ordersFeed).map((orderStatus) => {
        const status = orderStatus as OrderStatuses;
        const orders = ordersFeed[status] || [];

        return (
          <Feed
            key={orderStatus}
            orders={orders}
            status={status}
          />
        );
      })}
    </div>
  );
};
