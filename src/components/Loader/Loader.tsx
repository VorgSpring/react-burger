import React from 'react';
import imgPath from './resource/logo.svg';
import styles from './Loader.module.css';

export const Loader = () => (
  <section className={styles.root}>
    <div className={styles.loader}>
      <img className={styles.logo} src={imgPath} alt="logo" />
    </div>
  </section>
);
