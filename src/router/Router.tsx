import React from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ProfilePage from '../pages/ProfilePage';
import IngredientPage from '../pages/IngredientPage';
import FeedPage from '../pages/FeedPage';
import IngredientDetails from '../components/IngredientDetails';
import Modal from '../components/Modal';
import ProtectedRoute from '../components/ProtectedRoute';
import ProfileForm from '../components/ProfileForm';
import Logout from '../components/Logout';
import OrderHistory from '../components/OrderHistory';
import { OrdersTypes } from '../constants/orders/types';
import { RouteNames, RoutePaths } from '../constants/routes';
import DetailedOrder from '../components/DetailedOrder';

type LocationState = {
  state: {
    backgroundLocation: Location;
  }
};

export const Router = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location as LocationState;

  const goPreviosPage = () => {
    navigate(-1);
  };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path={RoutePaths[RouteNames.MAIN]}>
          <Route index element={<MainPage />} />

          <Route path={RouteNames.FEED} element={<FeedPage />} />

          <Route
            path={RouteNames.PROFILE}
            element={(
              <ProtectedRoute.RequireAauthorize>
                <ProfilePage />
              </ProtectedRoute.RequireAauthorize>
            )}
          >
            <Route index element={<ProfileForm />} />
            <Route path={RouteNames.LOGOUT} element={<Logout />} />
            <Route path={RouteNames.ORDERS} element={<OrderHistory type={OrdersTypes.MY} />} />
          </Route>

          <Route
            path={RouteNames.LOGIN}
            element={(
              <ProtectedRoute.IsNotAuthorized>
                <LoginPage />
              </ProtectedRoute.IsNotAuthorized>
            )}
          />
          <Route
            path={RouteNames.REGISTER}
            element={(
              <ProtectedRoute.IsNotAuthorized>
                <RegisterPage />
              </ProtectedRoute.IsNotAuthorized>
            )}
          />
          <Route
            path={RouteNames.FORGOT_PASSWORD}
            element={(
              <ProtectedRoute.IsNotAuthorized>
                <ForgotPasswordPage />
              </ProtectedRoute.IsNotAuthorized>
            )}
          />
          <Route
            path={RouteNames.RESET_PASSWORD}
            element={(
              <ProtectedRoute.IsNotAuthorized>
                <ResetPasswordPage />
              </ProtectedRoute.IsNotAuthorized>
            )}
          />

          <Route path={RouteNames.INGREDIENTS}>
            <Route path=":id" element={<IngredientPage />} />
          </Route>

          <Route path={RouteNames.FEED}>
            <Route path=":number" element={<DetailedOrder />} />
          </Route>

          <Route path={RouteNames.PROFILE}>
            <Route path={RouteNames.ORDERS}>
              <Route path=":number" element={<DetailedOrder />} />
            </Route>
          </Route>
        </Route>

        <Route
          path={RouteNames.ANY}
          element={<Navigate to={RoutePaths[RouteNames.MAIN]} replace />}
        />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path={RoutePaths[RouteNames.MAIN]}>
            <Route path={RouteNames.INGREDIENTS}>
              <Route
                path=":id"
                element={(
                  <Modal onClose={goPreviosPage}>
                    <IngredientDetails />
                  </Modal>
                )}
              />
            </Route>

            <Route path={RouteNames.FEED}>
              <Route
                path=":number"
                element={(
                  <Modal onClose={goPreviosPage}>
                    <DetailedOrder />
                  </Modal>
                )}
              />
            </Route>

            <Route path={RouteNames.PROFILE}>
              <Route path={RouteNames.ORDERS}>
                <Route
                  path=":number"
                  element={(
                    <Modal onClose={goPreviosPage}>
                      <DetailedOrder />
                    </Modal>
                  )}
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};
