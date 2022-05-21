import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import styles from './Ingredient.module.css';
import { TStore } from '../../../../types/store';
import { getIngredientByIdSelector, isLoadingSelector } from '../../../../selectors/ingredients';
import { TIngregient } from '../../../../types/ingredient';
import Skeleton from '../../../Skeleton';
import Price from '../../../Price';

type Props = {
  id: string;
  count: number;
};
export const Ingredient = ({ id, count }: Props) => {
  const ingredient = useSelector<TStore, TIngregient | null>(
    (store) => getIngredientByIdSelector(store, id),
  );

  const isLoading = useSelector<TStore, boolean>(isLoadingSelector);

  if (isLoading) {
    return <Skeleton height="64px" className="mb-4" />;
  }

  if (ingredient === null) {
    return null;
  }

  const { name, image, price } = ingredient;

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
        <span className="text text_type_digits-default">{count}&nbsp;x&nbsp;</span>
        <Price value={price} />
      </div>
    </div>
  );
};
