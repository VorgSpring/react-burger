import { withForm } from '../../hocs/withForm';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { requestForgotPassword } from '../../services/operations/forgotPassword';
import { FormTypes } from '../../constants/forms/types';

export default withForm(ForgotPasswordForm, FormTypes.FORGOT_PASSWORD, requestForgotPassword);
