import React from 'react';
import cn from 'classnames';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { HeaderNavLink } from './HeaderNavLink';
import {
  HeaderLeftNavigationData,
  HeaderRightNavigationData,
} from '../../constants/header';
import styles from './Header.module.css';

export const Header = () => (
  <header className={cn(styles.root, 'pt-4 pb-3')}>
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        {HeaderLeftNavigationData.map(({ title, path, Icon }) => (
          <HeaderNavLink
            key={path}
            title={title}
            path={path}
            Icon={Icon}
          />
        ))}
      </ul>

      <div className={cn(styles.navigation_logo, 'mt-1')}>
        <Logo />
      </div>

      <ul className={styles.navigation_list}>
        {HeaderRightNavigationData.map(({ title, path, Icon }) => (
          <HeaderNavLink
            key={path}
            title={title}
            path={path}
            Icon={Icon}
          />
        ))}
      </ul>
    </nav>
  </header>
);
