import React from 'react';
import styles from './Ingredients.module.css';

export const IngredientsEmpty = () => (
  <div className={`${styles.empty} text text_type_main-default text_color_inactive mb-4 mt-4`}>
    Добавте ингредиенты
  </div>
);
