import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BurgerConstructorBun from '../BurgerConstructorBun';
import BurgerConstructorIngredients from '../BurgerConstructorIngredients';
import BurgerConstructorOrder from '../BurgerConstructorOrder';
import OrderDetails from '../OrderDetails';
import ErrorOrderDetails from '../ErrorOrderDetails';
import Modal from '../Modal';
import { removeCurrentOrder } from '../../services/actions/order';
import { ConstructorBunTypes } from '../../constants/constructor';
import styles from './BurgerConstructor.module.css';

export const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const {
    errorCreating,
    currentOrder,
  } = useSelector((store) => ({
    orderCreating: store.order.isCreating,
    errorCreating: store.order.error,
    currentOrder: store.order.currentOrder,
  }));

  const handleCloseModal = () => {
    dispatch(removeCurrentOrder());
  };

  return (
    <section className={`${styles.root} pl-4`}>
      <div className={`${styles.constructor} mb-10`}>
        <BurgerConstructorBun type={ConstructorBunTypes.TOP} />
        <BurgerConstructorIngredients />
        <BurgerConstructorBun type={ConstructorBunTypes.BOTTOM} />
      </div>

      <BurgerConstructorOrder />

      {currentOrder && (
        <Modal onClose={handleCloseModal}>
          {errorCreating ? (
            <ErrorOrderDetails />
          ) : (
            <OrderDetails />
          )}
        </Modal>
      )}
    </section>
  );
};
