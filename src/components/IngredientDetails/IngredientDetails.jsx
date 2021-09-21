import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { IngredientDictionary } from '../../constants/ingredients';
import styles from './IngredientDetails.module.css';

export const IngredientDetails = ({
  image,
  name,
  ingredients,
  isOpen,
  onClose,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className="pt-10 pr-10 pl-10 pb-15"
  >
    <h2 className={`${styles.title} text text_type_main-large`}>
      Детали ингредиента
    </h2>

    <img
      className={`${styles.image} mb-4`}
      src={image}
      alt={name}
    />

    <h3 className={`${styles.name} text text_type_main-medium mb-8`}>
      {name}
    </h3>

    <div className={styles.ingredients}>
      {Object.keys(IngredientDictionary).map((item) => (
        <p
          key={item}
          className={`${styles.ingredient} mr-5`}
        >
          <span className="text text_type_main-default text_color_inactive mb-1">
            {IngredientDictionary[item]}
          </span>

          <span className="text text_type_digits-default text_color_inactive">
            {ingredients[item]}
          </span>
        </p>
      ))}
    </div>
  </Modal>
);

IngredientDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.shape({
    calories: PropTypes.string.isRequired,
    proteins: PropTypes.string.isRequired,
    fat: PropTypes.string.isRequired,
    carbohydrates: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
