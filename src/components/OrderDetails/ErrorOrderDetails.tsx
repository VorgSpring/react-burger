import React from 'react';
import cn from 'classnames';
import styles from './OrderDetails.module.css';

type Props = {
  error?: string | null;
};

export const ErrorOrderDetails = ({ error = null }: Props) => (
  <section className={cn(styles.root, 'pt-30 pb-30')}>
    <p className="text text_type_main-medium mb-15">
      Приносим свои извенения
    </p>

    <p className="text text_type_main-default mb-2">
      Попробуте создать заказ познее
    </p>

    {error && <p className="text text_type_main-default text_color_inactive">
      {error}
    </p>}
  </section>
);
