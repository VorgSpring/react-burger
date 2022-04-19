import { checkResponce } from '../helpers/api';
import { FormApiUrls, FormApiMethods } from '../constants/forms/api';
import { FormTypes } from '../constants/forms/types';
import { getAccessToken } from '../helpers/tokens';
import { TFormValues } from '../types/forms/state';

export const requestFormApi = <TResponce>(
  formType: FormTypes,
  body: TFormValues,
  isAuthorization: boolean,
): Promise<TResponce> => {
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
    .then((responce) => checkResponce<TResponce>(responce));
};
