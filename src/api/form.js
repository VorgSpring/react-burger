import { checkResponce } from '../helpers/api';
import { FormApiUrls, FormApiMethods } from '../constants/forms/api';

export const requestFormApi = (formType, body) => (
  fetch(FormApiUrls[formType], {
    method: FormApiMethods[formType],
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  })
    .then((responce) => responce.json())
    .then(checkResponce)
);
