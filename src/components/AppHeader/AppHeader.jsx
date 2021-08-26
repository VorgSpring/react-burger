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
    <header className="p-4">
      <nav className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li className="mr-2">
            <a
              href="/"
              className={`${styles.navigation_link} pl-4 pr-5 pt-4 pb-5`}
            >
              <span className="mr-2">
                <BurgerIcon />
              </span>

              <span className="text text_type_main-default text_color_primary">
                Конструктор
              </span>
            </a>
          </li>

          <li className="mr-2">
            <a
              href="/"
              className={`${styles.navigation_link} pl-4 pr-5 pt-4 pb-5`}
            >
              <span className="mr-2">
                <ListIcon />
              </span>

              <span className="text text_type_main-default text_color_inactive">
                Лента заказов
              </span>
            </a>
          </li>
        </ul>

        <Logo />

        <ul className={styles.navigation_list}>
          <li>
            <a 
              href="/"
              className={`${styles.navigation_link} pl-4 pr-5 pt-4 pb-5`}
            >
              <span className="mr-2">
                <ProfileIcon />
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
