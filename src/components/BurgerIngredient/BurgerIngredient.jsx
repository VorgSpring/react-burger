import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsTypes } from '../../constants/ingredients';
import { setCurrentIngredient } from '../../services/actions/currentIngredient';
import styles from './BurgerIngredient.module.css';

export const BurgerIngredient = ({ item }) => {
  const {
    image,
    name,
    price,
    count,
  } = item;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentIngredient(item._id));
  };

  return (
    <li
      className={`${styles.root} mt-8`}
      onClick={handleClick}
    >
      {count && (
        <Counter count={1} size="default" />
      )}

      <img
        className={`${styles.image} mb-2`}
        src={image}
        alt={name}
      />

      <div className={`${styles.price} mb-1`}>
        <span className="text text_type_digits-default mr-1">
          {price}
        </span>

        <CurrencyIcon type="primary" />
      </div>

      <h4 className={`${styles.name} text text_type_main-default`}>
        {name}
      </h4>
    </li>
  );
};

BurgerIngredient.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    count: PropTypes.number,
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.oneOf(
      Object.keys(IngredientsTypes),
    ).isRequired,
    __v: PropTypes.number.isRequired,
  }).isRequired,
};
