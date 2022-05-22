import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { TStore } from '../../../../types/store';
import { getIngredientByIdSelector } from '../../../../selectors/ingredients';
import { TIngregient } from '../../../../types/ingredient';
import { IngredientsTypeNames } from '../../../../constants/ingredients';
import styles from './Ingredient.module.css';

type Props = {
  id: string;
  count: number;
  className: string;
};
export const Ingredient = ({ id, count, className }: Props) => {
  const ingredient = useSelector<TStore, TIngregient | null>(
    (store) => getIngredientByIdSelector(store, id),
  );

  if (ingredient === null) {
    return null;
  }

  const { name, image, type } = ingredient;

  const finalCount = type === IngredientsTypeNames.INGREDIENT_BUN_TYPE ? 2 : count;

  return (
    <div className={cn(styles.root, className)} title={name}>
      <img src={image} alt={name} className={styles.image} />

      {finalCount > 1 && (
        // eslint-disable-next-line react/jsx-one-expression-per-line
        <div className={styles.many}>+{finalCount}</div>
      )}
    </div>
  );
};
