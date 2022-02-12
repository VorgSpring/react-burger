import React from 'react';
import EntrancePageLayout from '../../components/EntrancePageLayout';
import RegisterForm from '../../components/RegisterForm';
import { RoutePaths } from '../../constants/routes';
import { EntrancePageData } from '../../constants/page';

export const RegisterPage = () => {
  const { title, links } = EntrancePageData[RoutePaths.REGISTER];

  return (
    <EntrancePageLayout
      title={title}
      links={links}
    >
      <RegisterForm />
    </EntrancePageLayout>
  );
};
