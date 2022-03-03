import { withForm } from '../../hocs/withForm';
import { ProfileForm } from './ProfileForm';
import { changeProfile } from '../../services/operations/profile';
import { FormTypes } from '../../constants/forms/types';

export default withForm(ProfileForm, FormTypes.PROFILE, changeProfile);
