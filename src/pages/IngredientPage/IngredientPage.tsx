import React from 'react';
import IngredientDetails from '../../components/IngredientDetails';
import styles from './IngredientPage.module.css';

export const IngredientPage = () => (
  <section className={styles.root}>
    <IngredientDetails />
  </section>
);
