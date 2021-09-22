import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails';
import BurgerIngredient from '../BurgerIngredient';
import {
  IngredientsTypes,
  INGREDIENT_BUN_TYPE,
  INGREDIENT_MAIN_TYPE,
  INGREDIENT_SAUCE_TYPE,
} from '../../constants/ingredients';
import styles from './BurgerIngredients.module.css';
import Modal from '../Modal';

export const BurgerIngredients = ({ items }) => {
  const [currentTab, setCurrentTab] = useState('bun');
  const [currentIngredient, setCurrentIngredient] = useState(null);

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

  const handleCloseIngredientModal = () => {
    setCurrentIngredient(null);
  };

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

  return (
    <section className={styles.root}>
      <div className={`${styles.tabs} mb-10`}>
        {Object.keys(IngredientsTypes).map((type) => (
          <Tab
            key={`${type}tab`}
            value={type}
            active={currentTab === type}
            onClick={handleChoiceTab}
          >
            {IngredientsTypes[type]}
          </Tab>
        ))}
      </div>

      <ul
        className={styles.ingredients}
        ref={listRef}
        onScroll={handleScroll}
      >
        {Object.keys(IngredientsTypes).map((type) => (
          <li
            key={`${type}ingredients`}
            className={`${styles.ingredients_item} mb-10`}
            ref={getRef(type)}
          >
            <h3 className="text text_type_main-medium mb-6">
              {IngredientsTypes[type]}
            </h3>

            <ul className={`${styles.ingredients_list} pl-4 pr-4`}>
              {items
                .filter((item) => item.type === type)
                .map((item) => (
                  <BurgerIngredient
                    // eslint-disable-next-line no-underscore-dangle
                    key={item._id}
                    item={item}
                    onClick={setCurrentIngredient}
                  />
                ))}
            </ul>
          </li>
        ))}
      </ul>

      {currentIngredient && (
        <Modal onClose={handleCloseIngredientModal}>
          <IngredientDetails
            image={currentIngredient.image}
            name={currentIngredient.name}
            ingredients={currentIngredient.ingredients}
          />
        </Modal>
      )}
    </section>
  );
};

BurgerIngredients.propTypes = {
  items: PropTypes.arrayOf(
    BurgerIngredient.propTypes.item,
  ).isRequired,
};
