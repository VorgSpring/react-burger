import React from 'react';
import Skeleton from '../Skeleton';
import styles from './ProfileForm.module.css';

export const ProfileFormSkeleton = () => (
  <div className={styles.root}>
    <Skeleton className="mb-6" height="64px" />
    <Skeleton className="mb-6" height="64px" />
    <Skeleton className="mb-6" height="64px" />
  </div>
);
