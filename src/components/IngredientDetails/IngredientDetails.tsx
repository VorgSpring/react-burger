import React, { useEffect } from 'react';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../hooks/typedHooks';
import LoadError from '../LoadError';
import { IngredientDetailsSkeleton } from './IngredientDetailsSkeleton';
import { IngredientDetailsEmpty } from './IngredientDetailsEmpty';
import { getIngredients } from '../../services/operations/ingredients';
import { ingredientDetailsSelector } from '../../selectors/ingredients';
import { IngredientStructure } from '../../constants/ingredients';
import styles from './IngredientDetails.module.css';

export const IngredientDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    ingredient,
    isLoading,
    error,
  } = useSelector(
    (store) => ingredientDetailsSelector(store, id),
  );

  useEffect(() => {
    if (ingredient === null) {
      dispatch(getIngredients());
    }
  }, [dispatch, ingredient]);

  if (isLoading || ingredient === null) {
    return (
      <IngredientDetailsSkeleton />
    );
  }

  if (ingredient === undefined) {
    return (
      <IngredientDetailsEmpty />
    );
  }

  if (error) {
    return (
      <LoadError className="pt-10 pr-10 pl-10 pb-15" error={error} />
    );
  }

  const {
    imageLarge,
    name,
    structure,
  } = ingredient;

  const ingredients = Object.keys(IngredientStructure) as Array<keyof typeof IngredientStructure>;

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
        {ingredients.map((item) => (
          <p
            key={item}
            className={cn(styles.ingredient, 'mr-5')}
          >
            <span className="text text_type_main-default text_color_inactive mb-1">
              {IngredientStructure[item]}
            </span>

            <span className="text text_type_digits-default text_color_inactive">
              {structure[item]}
            </span>
          </p>
        ))}
      </div>
    </section>
  );
};
