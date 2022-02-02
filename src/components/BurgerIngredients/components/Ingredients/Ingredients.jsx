import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Ingredient from '../Ingredient';
import { IngredientsSkeleton } from './IngredientsSkeleton';
import { IngredientsTypes } from '../../../../constants/ingredients';
import styles from './Ingredients.module.css';

export const Ingredients = ({ type }) => {
  const { ingredients, isLoading } = useSelector((store) => ({
    ingredients: store.ingredients.items,
    isLoading: store.ingredients.isLoading,
  }));

  if (isLoading || !ingredients) {
    return (
      <IngredientsSkeleton />
    );
  }

  return (
    <ul className={`${styles.root} pl-4 pr-4`}>
      {ingredients
        .filter((item) => item.type === type)
        .map((item) => (
          <Ingredient
            // eslint-disable-next-line no-underscore-dangle
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
