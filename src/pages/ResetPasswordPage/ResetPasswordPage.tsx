import React from 'react';
import EntrancePageLayout from '../../components/EntrancePageLayout';
import ResetPasswordForm from '../../components/ResetPasswordForm';
import { RouteNames, RoutePaths } from '../../constants/routes';
import { EntrancePageData } from '../../constants/page';
import { TPage } from '../../types/page';

export const ResetPasswordPage = () => {
  const { title, links } = EntrancePageData[RoutePaths[RouteNames.RESET_PASSWORD]] as TPage;

  return (
    <EntrancePageLayout
      title={title}
      links={links}
    >
      <ResetPasswordForm />
    </EntrancePageLayout>
  );
};
