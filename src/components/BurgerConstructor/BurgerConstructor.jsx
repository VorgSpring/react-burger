import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import Bun from './components/Bun';
import Ingredients from './components/Ingredients';
import OrderCreator from './components/OrderCreator';
import OrderDetails from '../OrderDetails';
import Modal from '../Modal';
import { removeCurrentOrder } from '../../services/actions/order';
import { addIngredientInBurger } from '../../services/actions/burger';
import { ConstructorBunTypes } from '../../constants/constructor';
import styles from './BurgerConstructor.module.css';

export const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingregient',
    drop(item) {
      dispatch(addIngredientInBurger(item));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

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
      <div
        className={
          `${styles.constructor} ${isHover ? styles.constructor_hover : ''} mb-10`
        }
        ref={dropTarget}
      >
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
