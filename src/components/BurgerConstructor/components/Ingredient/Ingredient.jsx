import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { removeIngredientInBurger } from '../../../../services/actions/burger';
import { ConstructorElementTypes } from '../../../../constants/constructor';
import styles from './Ingredient.module.css';

export const Ingredient = ({ item, index }) => {
  const dispatch = useDispatch();

  const {
    name,
    price,
    image,
    constructorType,
  } = item;

  const handleRemoveIngredient = () => {
    dispatch(removeIngredientInBurger({
      index,
      type: constructorType,
    }));
  };

  return (
    <li className={`${styles.root} mb-4`}>
      <span className="mr-2">
        <DragIcon type="primary" />
      </span>

      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleRemoveIngredient}
      />
    </li>
  );
};

Ingredient.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    constructorType: PropTypes.oneOf(
      Object.values(ConstructorElementTypes),
    ).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
