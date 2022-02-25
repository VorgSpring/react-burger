import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { IngredientDictionary } from '../../constants/ingredients';
import { getIngredientById } from '../../helpers/ingredients';
import styles from './IngredientDetails.module.css';

export const IngredientDetails = () => {
  const item = useSelector(
    (store) => getIngredientById(store.ingredients.items, store.currentIngredient),
  );

  const {
    imageLarge,
    name,
    structure,
  } = item;

  return (
    <section className="pt-10 pr-10 pl-10 pb-15">
      <h2 className={cn(styles.title, 'text text_type_main-large')}>
        Детали ингредиента
      </h2>

      <img
        className={cn(styles.image, 'mb-4')}
        src={imageLarge}
        alt={name}
      />

      <h3 className={cn(styles.name, 'text text_type_main-medium mb-8')}>
        {name}
      </h3>

      <div className={styles.ingredients}>
        {Object.keys(IngredientDictionary).map((ingredient) => (
          <p
            key={ingredient}
            className={cn(styles.ingredient, 'mr-5')}
          >
            <span className="text text_type_main-default text_color_inactive mb-1">
              {IngredientDictionary[ingredient]}
            </span>

            <span className="text text_type_digits-default text_color_inactive">
              {structure[ingredient]}
            </span>
          </p>
        ))}
      </div>
    </section>
  );
};
