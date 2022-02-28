import { withForm } from '../../hoc/withForm';
import { RegisterForm } from './RegisterForm';
import { requestRegister } from '../../services/operations/register';
import { FormTypes } from '../../constants/forms/types';

export default withForm(RegisterForm, FormTypes.LOGIN, requestRegister);
