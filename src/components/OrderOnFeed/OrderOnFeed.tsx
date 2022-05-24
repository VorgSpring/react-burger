import React from 'react';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import Status from '../OrderStatus';
import styles from './OrderOnFeed.module.css';
import { TOrders } from '../../types/order';
import Information from './components/Information';
import { getOrderPath } from '../../helpers/orders/util';
import { OrdersTypes } from '../../constants/orders/types';

type Props = {
  order: TOrders;
  type: OrdersTypes;
  withStatus: boolean;
};

export const OrderOnFeed = ({ order, type, withStatus }: Props) => {
  const location = useLocation();

  const {
    ingredients,
    status,
    number,
    name,
    updatedAt,
  } = order;

  return (
    <Link
      to={getOrderPath(number, type)}
      state={{
        backgroundLocation: location,
        wsType: type,
      }}
      className={cn(styles.root, 'p-6 mb-6')}
    >
      <div className={cn(styles.header, 'mb-6')}>
        <h3 className={cn(styles.number, 'text text_type_digits-default')}>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          #{number}
        </h3>

        <p className={cn(styles.date, 'text text_type_main-default text_color_inactive')}>
          {updatedAt}
        </p>
      </div>

      <div className={cn(styles.container, 'mb-6')}>
        <h2 className={cn(styles.title, 'text text_type_main-medium')}>
          {name}
        </h2>

        {withStatus && <Status status={status} className="mt-2" />}
      </div>

      <Information ingredientsIds={ingredients} />
    </Link>
  );
};
