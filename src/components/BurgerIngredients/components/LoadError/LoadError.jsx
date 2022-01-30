import React from 'react';
import { useSelector } from 'react-redux';
import styles from './LoadError.module.css';

export const LoadError = () => {
  const { error } = useSelector((store) => store.ingredients);

  return (
    <section className={`${styles.root} pr-5 pl-5`}>
      <p className="text text_type_main-large mb-15">
        Приносим свои извенения
      </p>

      <p className="text text_type_main-default pr-20 pl-20">
        Попробуте перезагрузить страницу или&nbsp;вернуться к нам познее
      </p>

      {error && (
        <p className="text text_type_main-default text_color_inactive mt-15">
          {error}
        </p>
      )}
    </section>
  );
};
