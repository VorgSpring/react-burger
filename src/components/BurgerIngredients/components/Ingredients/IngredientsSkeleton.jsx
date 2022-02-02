import React from 'react';
import Skeleton from '../../../Skeleton';
import styles from './Ingredients.module.css';

export const IngredientsSkeleton = () => (
  <div className={`${styles.skeleton} pl-4 pr-4`}>
    <Skeleton width="272px" height="200px" />
    <Skeleton width="272px" height="200px" />
  </div>
);
