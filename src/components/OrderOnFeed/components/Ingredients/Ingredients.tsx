import React from 'react';
import cn from 'classnames';
import { preparedOrderIngredients } from '../../../../helpers/orders/util';
import { Ingredient } from '../Ingredient/Ingredient';
import styles from './Ingredients.module.css';

type Props = {
  ids: Array<string>
};
export const Ingredients = ({ ids }: Props) => {
  const preparedIngredientValues = preparedOrderIngredients(ids);

  return (
    <div className={cn(styles.root, 'mr-6')}>
      {Object.keys(preparedIngredientValues).reverse().map((id) => (
        <Ingredient
          key={id}
          className={styles.ingredient}
          id={id}
          count={preparedIngredientValues[id]}
        />
      ))}
    </div>
  );
};
