import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import Ingredient from '../Ingredient';
import { IngredientsSkeleton } from './IngredientsSkeleton';
import { getIngredientsAndLoadingSelector } from '../../../../selectors/ingredients';
import { IngredientsTypeNames } from '../../../../constants/ingredients';
import styles from './Ingredients.module.css';

type Props = {
  type: keyof typeof IngredientsTypeNames;
};

export const Ingredients = ({ type }: Props) => {
  const { ingredients, isLoading } = useSelector(getIngredientsAndLoadingSelector);

  if (isLoading || !ingredients) {
    return (
      <IngredientsSkeleton />
    );
  }

  return (
    <ul className={cn(styles.root, 'pl-4 pr-4')}>
      {ingredients
        .filter((item) => item.type === IngredientsTypeNames[type])
        .map((item) => (
          <Ingredient
            key={item.id}
            item={item}
          />
        ))}
    </ul>
  );
};
