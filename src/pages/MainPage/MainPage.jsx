import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerConstructor from '../../components/BurgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients';
import styles from './MainPage.module.css';

export const MainPage = () => (
  <>
    <h1 className="text text_type_main-large mt-10 mb-5">
      Соберите бургер
    </h1>

    <div className={`${styles.container} pb-10`}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </div>
  </>
);
