import React, { useEffect, useState } from 'react';
import Header from '../AppHeader';
import BurgerConstructor from '../BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients';
import { BurgerContext } from '../../services/appContext';
import { loadIngredients } from '../../api/ingredient';
import { getMainBurger } from '../../helpers/burger';
import styles from './App.module.css';

export const App = () => {
  const [burger, setBurger] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadIngredients()
      .then((data) => {
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
          <BurgerIngredients />

          <BurgerContext.Provider value={{ burger }}>
            <BurgerConstructor />
          </BurgerContext.Provider>
        </div>
      </main>
    </>
  );
};
