import React, { useEffect, useState } from 'react';
import Header from '../AppHeader';
import BurgerConstructor from '../BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients';
import { BurgerContext, IngredientsContext } from '../../services/appContext';
import { getIngredient } from '../../api/ingredient';
import { getMainBurger } from '../../helpers/burger';
import styles from './App.module.css';

export const App = () => {
  const [ingredients, setIngredients] = useState(null);
  const [burger, setBurger] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getIngredient
      .then(({ success, data }) => {
        if (!success) {
          throw new Error('Что-то пошло не так!');
        }

        setIngredients(data);

        // Временное решение
        // Пока выбирать ингредиенты нельзя
        setBurger(getMainBurger(data));
      })
      .catch(({ message }) => {
        setError(message);
      });
  }, []);

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
          <IngredientsContext.Provider value={{ ingredients }}>
            <BurgerIngredients />
          </IngredientsContext.Provider>

          <BurgerContext.Provider value={{ burger }}>
            <BurgerConstructor />
          </BurgerContext.Provider>
        </div>
      </main>
    </>
  );
};
