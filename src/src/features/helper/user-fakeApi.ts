import { LoginFunctionType } from "./../api/login-btn";
import { UserInfoType } from "../api/login-btn";

const validEmail: string = "some@gmail.com";
const validPass: string = "some12345";

const userInfo: UserInfoType = {
  name: "Nathan",
  email: validEmail,
};

export const login: LoginFunctionType = function (email, password) {
  const delay = 3000;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (email === validEmail && password === validPass) {
        res(userInfo);
      } else {
        rej("Wrong email or rassword");
      }
    }, delay);
  });
};
