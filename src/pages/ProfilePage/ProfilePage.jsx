import React from 'react';
import cn from 'classnames';
import { Route, Routes, NavLink } from 'react-router-dom';
import ProfileForm from '../../components/ProfileForm';
import Plug from '../../components/Plug';
import { ProfileNavigationData } from '../../constants/page';
import { NestedProfilePaths } from '../../constants/routes';
import styles from './ProfilePage.module.css';

export const ProfilePage = () => (
  <section className={styles.root}>
    <nav className={`${styles.tabs} mr-15`}>
      {ProfileNavigationData.map(({ path, title }) => (
        <NavLink
          key={path}
          to={path}
          end
          className={({ isActive }) => cn(styles.link, 'text text_type_main-medium pb-4 pt-4', {
            text_color_primary: isActive,
            [styles.link_inactive]: !isActive,
            text_color_inactive: !isActive,
          })}
        >
          {title}
        </NavLink>
      ))}

      <p className={cn(styles.description, 'text text_color_inactive text_type_main-default mt-20')}>
        В этом разделе вы можете изменить&nbsp;свои персональные данные
      </p>
    </nav>

    <Routes>
      <Route path={NestedProfilePaths.PROFILE} element={<ProfileForm />} />
      <Route path={NestedProfilePaths.ORDERS} element={<Plug />} />
    </Routes>
  </section>
);
