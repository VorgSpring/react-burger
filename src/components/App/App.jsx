import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from '../AppHeader';
import BurgerConstructor from '../BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients';
import styles from './App.module.css';

export const App = () => (
  <>
    <Header />

    <main className={styles.root}>
      <h1 className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </h1>

      <div className={`${styles.container} pb-10`}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </div>
    </main>
  </>
);
