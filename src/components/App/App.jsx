import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../AppHeader';
import BurgerConstructor from '../BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients';
import { getIngredients } from '../../services/operations/ingredients';
import styles from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const { error } = useSelector((store) => ({
    error: store.ingredients.error,
  }));

  if (error) {
    return (
      <main className={styles.root}>
        <h1 className="text text_type_main-large mt-10 mb-5">
          {error}
        </h1>
      </main>
    );
  }

  return (
    <>
      <Header />

      <main className={styles.root}>
        <h1 className="text text_type_main-large mt-10 mb-5">
          Соберите бургер
        </h1>

        <div className={`${styles.container} pb-10`}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </main>
    </>
  );
};
