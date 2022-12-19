export type LogInBtnType = {
  type: string;
  text: string;
};

export interface logInFxType {
  email: string;
  password: string;
}

export interface UserInfoType {
  name: string;
  email: string;
}

export type LoginFunctionType = (
  email: string,
  password: string
) => Promise<UserInfoType> | string;
