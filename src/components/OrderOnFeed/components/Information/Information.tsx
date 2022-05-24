import React from 'react';
import { useSelector } from '../../../../hooks/typedHooks';
import { getIngredientPriceByIdsSelector } from '../../../../selectors/ingredients';
import Price from '../../../Price';
import Ingredients from '../Ingredients';
import styles from './Information.module.css';
import { InformationSkeleton } from './InformationSkeleton';

type Props = {
  ingredientsIds: string[];
};
export const Information = ({ ingredientsIds }: Props) => {
  const {
    price,
    isLoading,
    error,
  } = useSelector(
    (store) => getIngredientPriceByIdsSelector(store, ingredientsIds),
  );

  if (error || price === null) {
    return null;
  }

  if (isLoading) {
    return (
      <InformationSkeleton />
    );
  }

  return (
    <div className={styles.root}>
      <Ingredients ids={ingredientsIds} />

      <Price value={price} className={styles.price} />
    </div>
  );
};
