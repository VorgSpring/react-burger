import React from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import ResetPasswordPage from './ResetPasswordPage';
import ProfilePage from './ProfilePage';
import IngredientPage from './IngredientPage';
import IngredientDetails from '../components/IngredientDetails';
import Modal from '../components/Modal';
import ProtectedRoute from '../components/ProtectedRoute';
import ProfileForm from '../components/ProfileForm';
import Logout from '../components/Logout';
import OrderHistory from '../components/OrderHistory';
import { OrdersTypes } from '../constants/orders/types';
import { RoutePaths } from '../constants/routes';
import DetailedOrder from '../components/DetailedOrder';
import FeedPage from './FeedPage';

type LocationState = {
  state: {
    backgroundLocation: Location;
  }
};

export default () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location as LocationState;

  const goPreviosPage = () => {
    navigate(-1);
  };

  return (
    <MainLayout>
      <Routes location={state?.backgroundLocation || location}>
        <Route index element={<MainPage />} />

        <Route path="ingredients">
          <Route path=":id" element={<IngredientPage />} />
        </Route>

        <Route path="feed" element={<FeedPage />} />

        <Route path="feed">
          <Route path=":number" element={<DetailedOrder />} />
        </Route>

        <Route
          path="login"
          element={(
            <ProtectedRoute.IsNotAuthorized>
              <LoginPage />
            </ProtectedRoute.IsNotAuthorized>
          )}
        />
        <Route
          path="register"
          element={(
            <ProtectedRoute.IsNotAuthorized>
              <RegisterPage />
            </ProtectedRoute.IsNotAuthorized>
          )}
        />
        <Route
          path="forgot-password"
          element={(
            <ProtectedRoute.IsNotAuthorized>
              <ForgotPasswordPage />
            </ProtectedRoute.IsNotAuthorized>
          )}
        />
        <Route
          path="reset-password"
          element={(
            <ProtectedRoute.IsNotAuthorized>
              <ResetPasswordPage />
            </ProtectedRoute.IsNotAuthorized>
          )}
        />

        <Route
          path="profile"
          element={(
            <ProtectedRoute.RequireAauthorize>
              <ProfilePage />
            </ProtectedRoute.RequireAauthorize>
          )}
        >
          <Route index element={<ProfileForm />} />
          <Route path="logout" element={<Logout />} />
          <Route path="orders" element={<OrderHistory type={OrdersTypes.MY} />} />
        </Route>

        <Route path="profile/orders">
          <Route path=":number" element={<DetailedOrder />} />
        </Route>

        <Route
          path={RoutePaths.ANY}
          element={<Navigate to={RoutePaths.CONSTRUCTOR} replace />}
        />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="ingredients">
            <Route
              path=":id"
              element={(
                <Modal onClose={goPreviosPage}>
                  <IngredientDetails />
                </Modal>
              )}
            />
          </Route>

          <Route path="profile/orders">
            <Route
              path=":number"
              element={(
                <Modal onClose={goPreviosPage}>
                  <DetailedOrder />
                </Modal>
              )}
            />
          </Route>

          <Route path="feed">
            <Route
              path=":number"
              element={(
                <Modal onClose={goPreviosPage}>
                  <DetailedOrder />
                </Modal>
              )}
            />
          </Route>
        </Routes>
      )}
    </MainLayout>
  );
};
