import React from 'react';
import cn from 'classnames';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import Bun from './components/Bun';
import Ingredients from './components/Ingredients';
import OrderCreator from './components/OrderCreator';
import OrderDetails from '../OrderDetails';
import Modal from '../Modal';
import { removeCurrentOrder } from '../../services/actions/order';
import { addIngredientInBurger } from '../../services/actions/burger';
import { ConstructorBunTypes, ConstructorElementTypes } from '../../constants/constructor';
import { DndTypes } from '../../constants/dndTypes';
import styles from './BurgerConstructor.module.css';
import { TStore } from '../../types/store';

export const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const [{ isHover }, dropTarget] = useDrop({
    accept: DndTypes.INGREDIENT,
    drop(item: { type: ConstructorElementTypes, id: string }) {
      dispatch(addIngredientInBurger(item.type, item.id, uuid()));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  // TODO переделать на механику роутера
  const { isShowModal } = useSelector<TStore, { isShowModal: boolean }>((store) => ({
    isShowModal: Boolean(store.order.currentOrder || store.order.error),
  }));

  // TODO переделать на механику роутера
  const handleCloseModal = () => {
    dispatch(removeCurrentOrder());
  };

  return (
    <section className={cn(styles.root, 'pl-4')}>
      <div
        className={cn(styles.constructor, 'mb-10', {
          [styles.constructor_hover]: isHover,
        })}
        ref={dropTarget}
      >
        <Bun type={ConstructorBunTypes.TOP} />
        <Ingredients />
        <Bun type={ConstructorBunTypes.BOTTOM} />
      </div>

      <OrderCreator />

      {isShowModal && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};
