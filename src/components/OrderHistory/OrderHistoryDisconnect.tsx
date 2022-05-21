import React from 'react';
import cn from 'classnames';
import styles from './OrderHistory.module.css';

export const OrderHistoryDisconnect = () => (
  <p className={cn(styles.disconnect, 'text text_type_main-large')}>
    Соединение прерванно
  </p>
);
