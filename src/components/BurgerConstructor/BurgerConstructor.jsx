import React, {
  useState,
  useEffect,
  useReducer,
} from 'react';
import { useSelector } from 'react-redux';
import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails';
import ErrorOrderDetails from '../ErrorOrderDetails';
import { createOrder } from '../../api/order';
import { getSum } from '../../helpers/burger';
import { ERROR_CREATING_ORDER } from '../../constants/errors';
import styles from './BurgerConstructor.module.css';
import Modal from '../Modal';

// Временное решение
const initialState = { orderSumm: 0 };
const sumReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INGREDIENTS':
      return {
        orderSumm: getSum(action.burger),
      };

    default:
      return state;
  }
};

export const BurgerConstructor = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [error, setError] = useState(null);

  const { burger } = useSelector((store) => ({
    burger: store.burger,
  }));

  // Временное решение
  const [state, dispatch] = useReducer(sumReducer, initialState);
  const { orderSumm } = state;

  // Временное решение
  useEffect(() => {
    if (!burger) {
      return;
    }

    dispatch({
      type: 'CHANGE_INGREDIENTS',
      burger,
    });
  }, [burger, dispatch]);

  if (!burger) {
    return null;
  }

  const { bun, ingredients } = burger;

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreateOrder = () => {
    if (isCreating) {
      return;
    }

    setError(null);
    setIsCreating(true);

    createOrder(burger)
      .then(({
        success, message, order,
      }) => {
        setIsCreating(false);
        setOpenModal(true);

        if (!success) {
          setError(message);
          return;
        }

        setOrderNumber(order.number);
      })
      .catch((e) => {
        setOpenModal(true);
        setIsCreating(false);
        setError(e.message || ERROR_CREATING_ORDER);
      });
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
            {orderSumm}
          </span>

          <span className={styles.order_icon}>
            <CurrencyIcon type="primary" />
          </span>
        </div>

        <Button onClick={handleCreateOrder} disabled={isCreating}>
          {isCreating ? 'Подождите...' : 'Оформить заказ'}
        </Button>
      </div>

      {isOpenModal && (
        <Modal onClose={handleCloseModal}>
          {error ? (
            <ErrorOrderDetails error={error} />
          ) : (
            <OrderDetails number={orderNumber} />
          )}
        </Modal>
      )}
    </section>
  );
};
