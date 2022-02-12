import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import ProfileForm from '../../components/ProfileForm';
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
          className={({ isActive }) => (
            `${styles.link} text text_type_main-medium pb-4 pt-4
            ${isActive ? 'text_color_primary' : `${styles.link_inactive} text_color_inactive`}`
          )}
        >
          {title}
        </NavLink>
      ))}

      <p className={`${styles.description} text text_color_inactive text_type_main-default mt-20`}>
        В этом разделе вы можете изменить&nbsp;свои персональные данные
      </p>
    </nav>

    <Routes>
      <Route path={NestedProfilePaths.PROFILE} element={<ProfileForm />} />
    </Routes>
  </section>
);
