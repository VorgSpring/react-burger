import { checkResponce } from '../helpers/api';
import { FormApiUrls, FormApiMethods } from '../constants/forms/api';

export const requestFormApi = (formType, body, isAuthorization) => {
  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
  };

  if (isAuthorization) {
    headers.authorization = localStorage.accessToken;
  }

  return fetch(FormApiUrls[formType], {
    method: FormApiMethods[formType],
    headers,
    body: JSON.stringify(body),
  })
    .then((responce) => responce.json())
    .then(checkResponce);
};
