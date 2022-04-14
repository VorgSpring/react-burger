import { checkResponce } from '../helpers/api';
import { FormApiUrls, FormApiMethods } from '../constants/forms/api';
import { FormTypes } from '../constants/forms/types';
import { getAccessToken } from '../helpers/tokens';

type TRequestFormApi = (formType: FormTypes, body: any, isAuthorization: boolean) => Promise<any>;

export const requestFormApi: TRequestFormApi = (formType, body, isAuthorization) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json;charset=utf-8',
  };

  if (isAuthorization) {
    headers.authorization = getAccessToken();
  }

  return fetch(FormApiUrls[formType], {
    method: FormApiMethods[formType],
    headers,
    body: JSON.stringify(body),
  })
    .then(checkResponce);
};
