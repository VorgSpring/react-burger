import { FormTypes } from '../../constants/forms/types';
import { FormActionTypes } from '../../services/actions/type';
import { TFormAtionsPayloads, TFormAtionsCreator } from '../../types/forms/actions';

export const formAtionsCreator = (
  type: FormTypes, action: FormActionTypes, payload?: TFormAtionsPayloads,
): TFormAtionsCreator => ({
  type: `${type}_${action}`,
  payload,
});
