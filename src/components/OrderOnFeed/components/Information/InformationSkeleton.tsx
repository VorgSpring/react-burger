import React from 'react';
import Skeleton from '../../../Skeleton';
import styles from './Information.module.css';

export const InformationSkeleton = () => (
  <div className={styles.root}>
    <Skeleton height="64px" className={styles.skeleton} />
  </div>
);
