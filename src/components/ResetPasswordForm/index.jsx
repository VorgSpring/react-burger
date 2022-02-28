import { withForm } from '../../hoc/withForm';
import { ResetPasswordForm } from './ResetPasswordForm';
import { requestResetPassword } from '../../services/operations/resetPassword';
import { FormTypes } from '../../constants/forms/types';

export default withForm(ResetPasswordForm, FormTypes.RESET_PASSWORD, requestResetPassword);
