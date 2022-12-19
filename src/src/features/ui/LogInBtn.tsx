import { useStore } from "effector-react";

import { ButtonCommon } from "../../shered/ui/ButtonCommon";
import { logInFx } from "../model/login-btn";
import { $loginData } from "../../shered/models/login-input-model";
import { LogInBtnType } from "../api/login-btn";

export const LogInBtn = ({ type, text }: LogInBtnType) => {
  const loginData = useStore($loginData);

  return (
    <ButtonCommon type={type} text={text} fn={logInFx} param={loginData} />
  );
};
