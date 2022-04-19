import { TAccessToken, TRefreshToken } from '../tokens';
import { TUser } from '../user';

export type TLoginResponce = {
  user: TUser;
  accessToken: TAccessToken;
  refreshToken: TRefreshToken;
  errorMessage: string;
};
