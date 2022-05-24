import React from 'react';
import EntrancePageLayout from '../../components/EntrancePageLayout';
import RegisterForm from '../../components/RegisterForm';
import { RouteNames, RoutePaths } from '../../constants/routes';
import { EntrancePageData } from '../../constants/page';
import { TPage } from '../../types/page';

export const RegisterPage = () => {
  const { title, links } = EntrancePageData[RoutePaths[RouteNames.REGISTER]] as TPage;

  return (
    <EntrancePageLayout
      title={title}
      links={links}
    >
      <RegisterForm />
    </EntrancePageLayout>
  );
};
