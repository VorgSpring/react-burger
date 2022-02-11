import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import ResetPasswordPage from './ResetPasswordPage';
import ProfilePage from './ProfilePage';
import IngredientPage from './IngredientPage';
import { RoutePaths } from '../constants/routes';

export default () => (
  <MainLayout>
    <Routes>
      <Route path={RoutePaths.MAIN} element={<MainPage />} />
      <Route path={RoutePaths.LOGIN} element={<LoginPage />} />
      <Route path={RoutePaths.REGISTER} element={<RegisterPage />} />
      <Route path={RoutePaths.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      <Route path={RoutePaths.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={RoutePaths.PROFILE} element={<ProfilePage />} />
      <Route path={RoutePaths.INGREDIENT} element={<IngredientPage />} />
    </Routes>
  </MainLayout>
);
