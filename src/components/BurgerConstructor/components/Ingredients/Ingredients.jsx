import React from 'react';
import { useSelector } from 'react-redux';
import { IngredientsEmpty } from './IngredientsEmpty';
import Ingredient from '../Ingredient';
import styles from './Ingredients.module.css';

export const Ingredients = () => {
  const ingredients = useSelector((store) => store.burger.ingredients);

  if (!ingredients) {
    return (
      <IngredientsEmpty />
    );
  }

  return (
    <ul className={`${styles.root} pr-2`}>
      {ingredients.map((item, index) => (
        <Ingredient
          // в бургере могут быть одинаковые ингредиенты
          // идентификатор элемента списка может быть не уникальным
          // eslint-disable-next-line react/no-array-index-key
          key={item.key}
          index={index}
          id={item.id}
        />
      ))}
    </ul>
  );
};
