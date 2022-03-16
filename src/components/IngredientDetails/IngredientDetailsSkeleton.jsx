import React from 'react';
import cn from 'classnames';
import Skeleton from '../Skeleton';
import styles from './IngredientDetails.module.css';

export const IngredientDetailsSkeleton = () => (
  <section className="pt-10 pr-10 pl-10 pb-15">
    <Skeleton className={cn(styles.title, styles.skeleton, 'text text_type_main-large')} width="540px" height="40px" />

    <Skeleton className={cn(styles.image, 'mb-4')} width="480px" height="240px" />

    <Skeleton className={cn(styles.name, styles.skeleton, 'text text_type_main-medium mb-8')} width="540px" height="30px" />

    <div className={styles.ingredients}>
      <Skeleton className={cn(styles.ingredient, 'mr-5')} width="115px" height="52px" />
      <Skeleton className={cn(styles.ingredient, 'mr-5')} width="115px" height="52px" />
      <Skeleton className={cn(styles.ingredient, 'mr-5')} width="115px" height="52px" />
      <Skeleton className={cn(styles.ingredient, 'mr-5')} width="115px" height="52px" />
    </div>
  </section>
);
