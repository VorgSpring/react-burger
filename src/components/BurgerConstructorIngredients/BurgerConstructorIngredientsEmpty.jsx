import React from 'react';
import styles from './BurgerConstructorIngredients.module.css';

export const BurgerConstructorIngredientsEmpty = () => (
  <div className={`${styles.empty} text text_type_main-default text_color_inactive mb-4 mt-4`}>
    Добавте ингредиенты
  </div>
);
