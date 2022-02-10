import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';

export default () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
  </Routes>
);
