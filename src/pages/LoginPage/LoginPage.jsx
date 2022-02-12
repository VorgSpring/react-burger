import React from 'react';
import EntrancePageLayout from '../../components/EntrancePageLayout';
import LoginForm from '../../components/LoginForm';
import { RoutePaths } from '../../constants/routes';
import { EntrancePageData } from '../../constants/page';

export const LoginPage = () => {
  const { title, links } = EntrancePageData[RoutePaths.LOGIN];

  return (
    <EntrancePageLayout
      title={title}
      links={links}
    >
      <LoginForm />
    </EntrancePageLayout>
  );
};
