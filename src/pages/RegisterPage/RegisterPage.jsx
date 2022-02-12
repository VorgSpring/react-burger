import React from 'react';
import EntrancePageLayout from '../../components/EntrancePageLayout';
import LoginForm from '../../components/LoginForm';
import { RoutePaths } from '../../constants/routes';
import { EntrancePageData } from '../../constants/page';

export const RegisterPage = () => (
  <EntrancePageLayout
    title={EntrancePageData[RoutePaths.REGISTER].title}
    links={EntrancePageData[RoutePaths.REGISTER].links}
  >
    <LoginForm />
  </EntrancePageLayout>
);
