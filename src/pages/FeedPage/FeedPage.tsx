import React from 'react';
import cn from 'classnames';
import FeedInformation from '../../components/FeedInformation';
import OrderHistory from '../../components/OrderHistory';
import { OrdersTypes } from '../../constants/orders/types';
import styles from './FeedPage.module.css';

export const FeedPage = () => (
  <>
    <h1 className="text text_type_main-large mt-10 mb-5">
      Лента заказов
    </h1>

    <section className={cn(styles.wrapper, 'pb-10')}>
      <section className={cn(styles.container, 'pr-2')}>
        <OrderHistory type={OrdersTypes.ALL} />
      </section>

      <section className={styles.container}>
        <FeedInformation />
      </section>
    </section>
  </>
);
