import React from 'react';
import Header from '../Header';
import styles from './MainLayout.module.css';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => (
  <>
    <Header />

    <main className={styles.root}>
      {children}
    </main>
  </>
);
