import { checkResponce } from '../helpers/api';
import { FormApiUrls, FormApiMethods } from '../constants/forms/api';
import { getAccessToken } from '../helpers/tokens';

export const requestFormApi = (formType, body, isAuthorization) => {
  const headers = {
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
