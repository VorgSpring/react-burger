import React from 'react';
import { getEmptyArray } from '../../helpers/array';
import Skeleton from '../Skeleton';
import styles from './OrderHistory.module.css';

export const OrderHistorySkeleton = () => (
  <div className={styles.root}>
    {getEmptyArray(10).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Skeleton key={index} height="214px" className={styles.skeleton} />
    ))}
  </div>
);
