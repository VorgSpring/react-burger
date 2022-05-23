import React from 'react';
import cn from 'classnames';
import { useSelector } from '../../../../hooks/typedHooks';
import { getIngredientByIdSelector, isLoadingSelector } from '../../../../selectors/ingredients';
import Skeleton from '../../../Skeleton';
import Price from '../../../Price';
import { IngredientsTypeNames } from '../../../../constants/ingredients';
import styles from './Ingredient.module.css';

type Props = {
  id: string;
  count: number;
};
export const Ingredient = ({ id, count }: Props) => {
  const ingredient = useSelector(
    (store) => getIngredientByIdSelector(store, id),
  );

  const isLoading = useSelector(isLoadingSelector);

  if (isLoading) {
    return <Skeleton height="64px" className="mb-4" />;
  }

  if (ingredient === null) {
    return null;
  }

  const {
    name,
    image,
    price,
    type,
  } = ingredient;

  const finalCount = type === IngredientsTypeNames.INGREDIENT_BUN_TYPE ? 2 : count;

  return (
    <div className={cn(styles.root, 'mb-4')}>
      <div className={cn(styles.image, 'mr-4')}>
        <img src={image} height="56" alt={name} />
      </div>

      <p className={cn(styles.name, 'text text text_type_main-default mr-4')}>
        {name}
      </p>

      <div className={styles.price}>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <span className="text text_type_digits-default">{finalCount}&nbsp;x&nbsp;</span>
        <Price value={price} />
      </div>
    </div>
  );
};
