import { withForm } from '../../hoc/withForm';
import { LoginForm } from './LoginForm';
import { requestLogin } from '../../services/operations/login';
import { FormTypes } from '../../constants/forms/types';

export default withForm(LoginForm, FormTypes.LOGIN, requestLogin);
