import React from 'react';
import EntrancePageLayout from '../../components/EntrancePageLayout';
import LoginForm from '../../components/LoginForm';
import { RoutePaths } from '../../constants/routes';
import { EntrancePageData } from '../../constants/page';
import { TPage } from '../../types/page';

export const LoginPage = () => {
  const { title, links } = EntrancePageData[RoutePaths.LOGIN] as TPage;

  return (
    <EntrancePageLayout
      title={title}
      links={links}
    >
      <LoginForm />
    </EntrancePageLayout>
  );
};
