import React, { useState, useContext } from 'react';
import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../OrderDetails';
import { BurgerContext } from '../../services/appContext';
import { INGREDIENT_BUN_TYPE } from '../../constants/ingredients';
import styles from './BurgerConstructor.module.css';
import Modal from '../Modal';

export const BurgerConstructor = () => {
  const { items } = useContext(BurgerContext);
  const [isOpenModal, setOpenModal] = useState(false);

  if (!items) {
    return null;
  }

  const bun = items.filter((item) => item.type === INGREDIENT_BUN_TYPE)[0];
  const otherElements = items.filter((item) => item.type !== INGREDIENT_BUN_TYPE);

  const sum = items.reduce((acc, item) => acc + item.price, 0);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
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
          {otherElements.map((item, i) => (
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
            {sum}
          </span>

          <span className={styles.order_icon}>
            <CurrencyIcon type="primary" />
          </span>
        </div>

        <Button onClick={handleOpenModal}>
          Оформить заказ
        </Button>
      </div>

      {isOpenModal && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};
