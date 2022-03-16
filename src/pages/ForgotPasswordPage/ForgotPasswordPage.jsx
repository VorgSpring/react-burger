import React from 'react';
import EntrancePageLayout from '../../components/EntrancePageLayout';
import ForgotPasswordForm from '../../components/ForgotPasswordForm';
import { RoutePaths } from '../../constants/routes';
import { EntrancePageData } from '../../constants/page';

export const ForgotPasswordPage = () => {
  const { title, links } = EntrancePageData[RoutePaths.FORGOT_PASSWORD];

  return (
    <EntrancePageLayout
      title={title}
      links={links}
    >
      <ForgotPasswordForm />
    </EntrancePageLayout>
  );
};
