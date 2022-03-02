import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import Ingredient from '../Ingredient';
import { IngredientsSkeleton } from './IngredientsSkeleton';
import { getIngredientsAndLoadingSelector } from '../../../../selectors/ingredients';
import { IngredientsTypes } from '../../../../constants/ingredients';
import styles from './Ingredients.module.css';

export const Ingredients = ({ type }) => {
  const { ingredients, isLoading } = useSelector(getIngredientsAndLoadingSelector);

  if (isLoading || !ingredients) {
    return (
      <IngredientsSkeleton />
    );
  }

  return (
    <ul className={cn(styles.root, 'pl-4 pr-4')}>
      {ingredients
        .filter((item) => item.type === type)
        .map((item) => (
          <Ingredient
            key={item.id}
            item={item}
          />
        ))}
    </ul>
  );
};

Ingredients.propTypes = {
  type: PropTypes.oneOf(
    Object.keys(IngredientsTypes),
  ).isRequired,
};
