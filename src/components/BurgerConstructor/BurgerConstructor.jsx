import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Bun from './components/Bun';
import Ingredients from './components/Ingredients';
import OrderCreator from './components/OrderCreator';
import OrderDetails from '../OrderDetails';
import Modal from '../Modal';
import { removeCurrentOrder } from '../../services/actions/order';
import { ConstructorBunTypes } from '../../constants/constructor';
import styles from './BurgerConstructor.module.css';

export const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const { currentOrder } = useSelector((store) => ({
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
        <Bun type={ConstructorBunTypes.TOP} />
        <Ingredients />
        <Bun type={ConstructorBunTypes.BOTTOM} />
      </div>

      <OrderCreator />

      {currentOrder && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};
