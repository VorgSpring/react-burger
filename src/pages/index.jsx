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
import Plug from '../components/Plug';
import ProtectedRoute from '../components/ProtectedRoute';
import { RoutePaths } from '../constants/routes';

export default () => (
  <MainLayout>
    <Routes>
      <Route path={RoutePaths.CONSTRUCTOR} element={<MainPage />} />
      <Route path={RoutePaths.INGREDIENT} element={<IngredientPage />} />
      <Route path={RoutePaths.FEED} element={<Plug />} />

      <Route
        path={RoutePaths.LOGIN}
        element={(
          <ProtectedRoute.IsNotAuthorized>
            <LoginPage />
          </ProtectedRoute.IsNotAuthorized>
        )}
      />
      <Route
        path={RoutePaths.REGISTER}
        element={(
          <ProtectedRoute.IsNotAuthorized>
            <RegisterPage />
          </ProtectedRoute.IsNotAuthorized>
        )}
      />
      <Route
        path={RoutePaths.FORGOT_PASSWORD}
        element={(
          <ProtectedRoute.IsNotAuthorized>
            <ForgotPasswordPage />
          </ProtectedRoute.IsNotAuthorized>
        )}
      />
      <Route
        path={RoutePaths.RESET_PASSWORD}
        element={(
          <ProtectedRoute.IsNotAuthorized>
            <ResetPasswordPage />
          </ProtectedRoute.IsNotAuthorized>
        )}
      />

      <Route
        path={RoutePaths.ROOT_PROFILE}
        element={(
          <ProtectedRoute.RequireAauthorize>
            <ProfilePage />
          </ProtectedRoute.RequireAauthorize>
        )}
      />
    </Routes>
  </MainLayout>
);
