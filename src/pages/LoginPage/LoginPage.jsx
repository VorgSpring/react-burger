import React from 'react';
import EntrancePageLayout from '../../components/EntrancePageLayout';
import LoginForm from '../../components/LoginForm';
import { RoutePaths } from '../../constants/routes';
import { EntrancePageData } from '../../constants/page';

export const LoginPage = () => (
  <EntrancePageLayout
    title={EntrancePageData[RoutePaths.LOGIN].title}
    links={EntrancePageData[RoutePaths.LOGIN].links}
  >
    <LoginForm />
  </EntrancePageLayout>
);
