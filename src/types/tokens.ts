import { Tokens } from "../constants/tokens";

export type TAccessToken = string;
export type TRefreshToken = string;

export type TTokens = {
  [Tokens.ACCESS]: TAccessToken;
  [Tokens.REFRESH]: TRefreshToken;
};
