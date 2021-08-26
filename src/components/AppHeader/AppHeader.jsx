import React from 'react';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';

export const AppHeader = () => {
  return (
    <header className={`${styles.root} p-4 pb-1`}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li className="mr-2">
            <a
              href="/"
              className={`${styles.navigation_link} pl-4 pr-5 pt-4 pb-5`}
            >
              <span className="mr-2">
                <BurgerIcon type="primary"/>
              </span>

              <span className="text text_type_main-default text_color_primary">
                Конструктор
              </span>
            </a>
          </li>

          <li>
            <a
              href="/"
              className={`${styles.navigation_link} pl-4 pr-5 pt-4 pb-5`}
            >
              <span className="mr-2">
                <ListIcon type="secondary"/>
              </span>

              <span className="text text_type_main-default text_color_inactive">
                Лента заказов
              </span>
            </a>
          </li>
        </ul>

        <div className={`${styles.navigation_logo} mt-1`}>
          <Logo />
        </div>

        <ul className={styles.navigation_list}>
          <li className="ml-2">
            <a 
              href="/"
              className={`${styles.navigation_link} pl-4 pr-5 pt-4 pb-5`}
            >
              <span className="mr-2">
                <ProfileIcon type="secondary"/>
              </span>

              <span className="text text_type_main-default text_color_inactive">
                Личный кабинет
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
