import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import Tabs from './components/Tabs';
import Ingredients from './components/Ingredients';
import LoadError from '../LoadError';
import { getIngredients } from '../../services/operations/ingredients';
import { getErrorAndEmptySelector } from '../../selectors/ingredients';
import {
  IngredientsTypeNames,
  IngredientsTypes,
  IngredientsTypesData,
} from '../../constants/ingredients';
import styles from './BurgerIngredients.module.css';

export const BurgerIngredients = () => {
  const dispatch = useDispatch();

  const [currentTab, setCurrentTab] = useState(IngredientsTypes.INGREDIENT_BUN_TYPE);

  const { error, isEmpty } = useSelector(getErrorAndEmptySelector);

  useEffect(() => {
    if (isEmpty) {
      dispatch(getIngredients());
    }
  }, [dispatch, isEmpty]);

  const listRef = useRef<HTMLUListElement | null>(null);
  const bunRef = useRef<HTMLLIElement | null>(null);
  const mainRef = useRef<HTMLLIElement | null>(null);
  const sauceRef = useRef<HTMLLIElement | null>(null);

  const getRef = (ref: IngredientsTypes) => {
    switch (ref) {
      case IngredientsTypes.INGREDIENT_BUN_TYPE:
        return bunRef;

      case IngredientsTypes.INGREDIENT_MAIN_TYPE:
        return mainRef;

      case IngredientsTypes.INGREDIENT_SAUCE_TYPE:
        return sauceRef;

      default:
        return null;
    }
  };

  const handleChoiceTab = (value: string) => {
    const type = IngredientsTypes[value as keyof typeof IngredientsTypes];

    setCurrentTab(type);

    const current = getRef(type)?.current;
    current?.scrollIntoView();
  };

  const handleScroll = () => {
    const listCurrent = listRef.current;
    const bunCurrent = bunRef.current;
    const mainCurrent = mainRef.current;
    const sauceCurrent = sauceRef.current;

    const parentTop = listCurrent?.getBoundingClientRect().top;
    const bunTop = bunCurrent?.getBoundingClientRect().top;
    const mainTop = mainCurrent?.getBoundingClientRect().top;
    const sauceTop = sauceCurrent?.getBoundingClientRect().top;

    if (!parentTop || !bunTop || !mainTop || !sauceTop) {
      return;
    }

    const positions = [
      Math.abs(bunTop - parentTop),
      Math.abs(mainTop - parentTop),
      Math.abs(sauceTop - parentTop),
    ];

    const min = Math.min(...positions);
    const type = Object.keys(IngredientsTypes)[positions.indexOf(min)] as IngredientsTypes;

    if (type !== currentTab) {
      setCurrentTab(type);
    }
  };

  if (error) {
    return (
      <LoadError className={cn(styles.load_error, 'pr-5 pl-5')} error={error} />
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
        {Object.keys(IngredientsTypes).map((ingredientType) => {
          const data = IngredientsTypesData[ingredientType as keyof typeof IngredientsTypesData];
          const type = IngredientsTypes[ingredientType as keyof typeof IngredientsTypes];

          return (
            <li
              key={`${type}ingredients`}
              className={cn(styles.ingredients_type, 'mb-6')}
              ref={getRef(type)}
            >
              <h3 className="text text_type_main-medium mb-6">
                {data}
              </h3>

              <Ingredients type={type as keyof typeof IngredientsTypeNames} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
