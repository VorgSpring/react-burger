import React from 'react';
import { useSelector } from 'react-redux';
import DoneImage from './resource/done.gif';
import DoneImage2x from './resource/done@2x.gif';
import styles from './OrderDetails.module.css';

export const OrderDetails = () => {
  const { currentOrder } = useSelector((store) => store.order);

  return (
    <section className={`${styles.root} pt-30 pb-30`}>
      <h2 className="text text_type_digits-large mb-8">
        {currentOrder}
      </h2>

      <p className="text text_type_main-medium mb-15">
        идентификатор заказа
      </p>

      <img
        className={`${styles.image} mb-15`}
        height="120"
        src={DoneImage}
        srcSet={`${DoneImage} 1x, ${DoneImage2x} 2x`}
        alt="done"
      />

      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>

      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
};
