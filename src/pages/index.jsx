import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import { RoutePaths } from '../constants/routes';

export default () => (
  <Routes>
    <Route path={RoutePaths.MAIN} element={<MainPage />} />
  </Routes>
);
