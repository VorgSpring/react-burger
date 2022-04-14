import { FormFieldTypes, FormTypes } from "../../constants/forms/types";
import { FormActionTypes } from "../../services/actions/type";
import { TFormValues } from "../../types/form";

export type TFormAtionsPayloads = {
  field?: FormFieldTypes;
  value?: string;
  message?: string;
  values?: TFormValues
};

export type TFormAtionsCreator = {
  type: string;
  payload?: TFormAtionsPayloads;
};
export const formAtionsCreator = (type: FormTypes, action: FormActionTypes, payload?: TFormAtionsPayloads): TFormAtionsCreator => ({
  type: `${type}_${action}`,
  payload,
});
