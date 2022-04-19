import { TAccessToken, TRefreshToken } from '../tokens';
import { TUser } from '../user';

export type TRegisterResponce = {
  user: TUser;
  accessToken: TAccessToken;
  refreshToken: TRefreshToken;
  errorMessage: string;
};
