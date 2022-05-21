import React from 'react';
import cn from 'classnames';
import Skeleton from '../Skeleton';
import styles from './ProfileForm.module.css';

export const ProfileFormSkeleton = () => (
  <div className={cn(styles.root, 'mt-20')}>
    <Skeleton className="mb-6" height="64px" />
    <Skeleton className="mb-6" height="64px" />
    <Skeleton className="mb-6" height="64px" />
  </div>
);
