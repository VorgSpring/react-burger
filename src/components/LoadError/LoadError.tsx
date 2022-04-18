import React from 'react';
import cn from 'classnames';
import styles from './LoadError.module.css';

type Props = {
  className?: string | null;
  error?: string | null;
  title?: string;
};

export const LoadError = ({ className = null, error = null, title = 'Приносим свои извенения' }: Props) => (
  <section className={cn(className, styles.root)}>
    <h2 className="text text_type_main-large mb-15">{title}</h2>

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
