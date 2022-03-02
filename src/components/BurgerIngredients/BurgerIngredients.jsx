import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

// TODO переделать на механику роутера
// import IngredientDetails from '../IngredientDetails';
// import Modal from '../Modal';
// import { removeCurrentIngredient } from '../../services/actions/currentIngredient';

import Tabs from './components/Tabs';
import Ingredients from './components/Ingredients';
import LoadError from './components/LoadError';
import { getIngredients } from '../../services/operations/ingredients';
import { getErrorAndEmptySelector } from '../../selectors/ingredients';
import {
  IngredientsTypes,
  INGREDIENT_BUN_TYPE,
  INGREDIENT_MAIN_TYPE,
  INGREDIENT_SAUCE_TYPE,
} from '../../constants/ingredients';
import styles from './BurgerIngredients.module.css';

export const BurgerIngredients = () => {
  const dispatch = useDispatch();

  const [currentTab, setCurrentTab] = useState(INGREDIENT_BUN_TYPE);

  const { error, isEmpty } = useSelector(getErrorAndEmptySelector);

  useEffect(() => {
    if (isEmpty) {
      dispatch(getIngredients());
    }
  }, []);

  const listRef = useRef(null);
  const bunRef = useRef(null);
  const mainRef = useRef(null);
  const sauceRef = useRef(null);

  const getRef = (ref) => {
    switch (ref) {
      case INGREDIENT_BUN_TYPE:
        return bunRef;

      case INGREDIENT_MAIN_TYPE:
        return mainRef;

      case INGREDIENT_SAUCE_TYPE:
        return sauceRef;

      default:
        return null;
    }
  };

  const handleChoiceTab = (value) => {
    setCurrentTab(value);
    getRef(value).current.scrollIntoView();
  };

  // TODO переделать на механику роутера
  // const handleCloseIngredientModal = () => {
  //   dispatch(removeCurrentIngredient());
  // };

  const handleScroll = () => {
    const parentTop = listRef.current.getBoundingClientRect().top;

    const positions = [
      Math.abs(bunRef.current.getBoundingClientRect().top - parentTop),
      Math.abs(mainRef.current.getBoundingClientRect().top - parentTop),
      Math.abs(sauceRef.current.getBoundingClientRect().top - parentTop),
    ];

    const min = Math.min(...positions);
    const type = Object.keys(IngredientsTypes)[positions.indexOf(min)];

    if (type && type !== currentTab) {
      setCurrentTab(type);
    }
  };

  if (error) {
    return (
      <LoadError error={error} />
    );
  }

  return (
    <section className={styles.root}>
      <Tabs currentTab={currentTab} onChoiceTab={handleChoiceTab} />

      <ul
        className={styles.ingredients}
        ref={listRef}
        onScroll={handleScroll}
      >
        {Object.keys(IngredientsTypes).map((type) => (
          <li
            key={`${type}ingredients`}
            className={cn(styles.ingredients_type, 'mb-6')}
            ref={getRef(type)}
          >
            <h3 className="text text_type_main-medium mb-6">
              {IngredientsTypes[type]}
            </h3>

            <Ingredients type={type} />
          </li>
        ))}
      </ul>

      {/*
        TODO переделать на механику роутера
        {currentIngredient && (
          <Modal onClose={handleCloseIngredientModal}>
            <IngredientDetails />
          </Modal>
        )}
      */}
    </section>
  );
};
