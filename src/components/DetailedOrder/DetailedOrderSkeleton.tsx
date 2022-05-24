import React from 'react';
import cn from 'classnames';
import Skeleton from '../Skeleton';
import styles from './DetailedOrder.module.css';

export const DetailedOrderSkeleton = () => (
  <div className={cn(styles.root, 'pt-10 pr-10 pl-10 pb-15')}>
    <Skeleton width="200px" height="24px" className="mb-10" />
    <Skeleton height="66px" className="mb-15" />
    <Skeleton height="366px" className="mb-10" />
    <Skeleton height="24px" />
  </div>
);
