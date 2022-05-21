import React from 'react';
import cn from 'classnames';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Price.module.css';

type Props = {
  value: number;
  className?: string;
  size?: 'default' | 'medium';
};

export const Price = ({ value, className, size = 'default' }: Props) => (
  <div className={cn(styles.root, className)}>
    <span className={`text text_type_digits-${size} mr-2`}>
      {value}
    </span>

    <span className={cn(styles.icon, styles[`icon_size_${size}`])}>
      <CurrencyIcon type="primary" />
    </span>
  </div>
);
