import React, { useEffect, useState } from 'react';
import Header from '../AppHeader';
import BurgerConstructor from '../BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients';
import { BurgerContext } from '../../services/appContext';
import { API_URL } from '../../constants/api';
import styles from './App.module.css';

export const App = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((responce) => responce.json())
      .then(({ success, data }) => {
        if (!success) {
          throw new Error('Что-то пошло не так!');
        }

        setItems(data);
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
          <BurgerContext.Provider value={{ items }}>
            <BurgerIngredients />
            <BurgerConstructor />
          </BurgerContext.Provider>
        </div>
      </main>
    </>
  );
};
