import React from 'react';
import { useSelector } from 'react-redux';
import { IngredientsEmpty } from './IngredientsEmpty';
import Ingredient from '../Ingredient';
import styles from './Ingredients.module.css';

export const Ingredients = () => {
  const ingredients = useSelector((store) => store.burger.ingredients);

  if (!ingredients.length) {
    return (
      <IngredientsEmpty />
    );
  }

  return (
    <ul className={`${styles.root} pr-2`}>
      {ingredients.map((item, index) => (
        <Ingredient
          key={item.key}
          index={index}
          id={item.id}
        />
      ))}
    </ul>
  );
};
