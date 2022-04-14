import React from 'react';
import cn from 'classnames';
import styles from './Plug.module.css';

type Props = {
  className?: string | null;
  title?: string;
};

export const Plug = ({ title = 'Функциональность дорабатывается', className = null }: Props) => (
  <section className={cn(className, styles.root)}>
    <h2 className="text text_type_main-large mb-15">{title}</h2>

    <p className="text text_type_main-default pr-20 pl-20">
      Мы работаем над этим
    </p>
  </section>
);
