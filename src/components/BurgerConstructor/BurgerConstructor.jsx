import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails';
import ErrorOrderDetails from '../ErrorOrderDetails';
import Modal from '../Modal';
import { createOrder } from '../../services/operations/order';
import { removeCurrentOrder } from '../../services/actions/order';
import { getSum } from '../../helpers/burger';
import styles from './BurgerConstructor.module.css';

export const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const {
    burger,
    orderSum,
    orderCreating,
    errorCreating,
    currentOrder,
  } = useSelector((store) => ({
    burger: store.burger,
    orderSum: store.burger && getSum(store.burger),
    orderCreating: store.order.isCreating,
    errorCreating: store.order.error,
    currentOrder: store.order.currentOrder,
  }));

  if (!burger) {
    return null;
  }

  const { bun, ingredients } = burger;

  const handleCloseModal = () => {
    dispatch(removeCurrentOrder());
  };

  const handleCreateOrder = () => {
    if (orderCreating) {
      return;
    }

    dispatch(createOrder());
  };

  return (
    <section className={`${styles.root} pl-4`}>
      <div className={`${styles.constructor} mb-10`}>
        <div className={`${styles.constructor_item} mb-4 pr-4`}>
          <ConstructorElement
            type="top"
            isLocked
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>

        <ul className={`${styles.constructor_list} pr-2`}>
          {ingredients.map((item, i) => (
            <li
              // в бургере могут быть одинаковые ингредиенты
              // идентификатор элемента списка может быть не уникальным
              // eslint-disable-next-line react/no-array-index-key
              key={`${item._id} ${i}`}
              className={`${styles.constructor_item} mb-4`}
            >
              <span className="mr-2">
                <DragIcon type="primary" />
              </span>

              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </li>
          ))}
        </ul>

        <div className={`${styles.constructor_item} mb-4 mt-4 pr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>

      <div className={`${styles.order} pr-4`}>
        <div className={`${styles.order_price} mr-10`}>
          <span className="text text_type_digits-medium mr-2">
            {orderSum}
          </span>

          <span className={styles.order_icon}>
            <CurrencyIcon type="primary" />
          </span>
        </div>

        <Button onClick={handleCreateOrder}>
          {orderCreating ? 'Подождите...' : 'Оформить заказ'}
        </Button>
      </div>

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
