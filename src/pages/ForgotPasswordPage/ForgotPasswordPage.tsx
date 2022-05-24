import React from 'react';
import EntrancePageLayout from '../../components/EntrancePageLayout';
import ForgotPasswordForm from '../../components/ForgotPasswordForm';
import { RouteNames, RoutePaths } from '../../constants/routes';
import { EntrancePageData } from '../../constants/page';
import { TPage } from '../../types/page';

export const ForgotPasswordPage = () => {
  const { title, links } = EntrancePageData[RoutePaths[RouteNames.FORGOT_PASSWORD]] as TPage;

  return (
    <EntrancePageLayout
      title={title}
      links={links}
    >
      <ForgotPasswordForm />
    </EntrancePageLayout>
  );
};
