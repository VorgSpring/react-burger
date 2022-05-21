import React from 'react';
import cn from 'classnames';
import styles from './DetailedOrder.module.css';

export const DetailedOrderNotFound = () => (
  <section className="pt-10 pr-10 pl-10 pb-15">
    <h2 className={cn(styles.title, 'text text_type_main-large')}>
      Заказ не найден
    </h2>
  </section>
);
