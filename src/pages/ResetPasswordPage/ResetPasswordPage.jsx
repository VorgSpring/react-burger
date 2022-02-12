import React from 'react';
import EntrancePageLayout from '../../components/EntrancePageLayout';
import ResetPasswordForm from '../../components/ResetPasswordForm';
import { RoutePaths } from '../../constants/routes';
import { EntrancePageData } from '../../constants/page';

export const ResetPasswordPage = () => {
  const { title, links } = EntrancePageData[RoutePaths.RESET_PASSWORD];

  return (
    <EntrancePageLayout
      title={title}
      links={links}
    >
      <ResetPasswordForm />
    </EntrancePageLayout>
  );
};
