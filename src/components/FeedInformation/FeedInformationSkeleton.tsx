import React from 'react';
import Skeleton from '../Skeleton';
import styles from './FeedInformation.module.css';

export const FeedInformationSkeleton = () => (
  <div className={styles.root}>
    <Skeleton height="206px" className="mb-15" />
    <Skeleton height="150px" className="mb-15" />
    <Skeleton height="150px" />
  </div>
);
