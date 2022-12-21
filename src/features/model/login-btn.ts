import { createStore, createEffect } from "effector";

import { logInFxType } from "../api/login-btn";
import { login } from "../helper/user-fakeApi";

// const logIn = (email: string, password: string) => {
//   return login(email, password);
// };

// export const logInFx = createEffect<typeof logIn, Error>(logIn);

export const logInFx = createEffect(({ email, password }: logInFxType) => {
  return login(email, password);
});

const initStore = {
  status: "logout",
};

export const $userLoginizationDate = createStore(initStore)
  .on(logInFx.pending, (state, value) => {
    return value ? { status: "loading" } : state;
  })
  .on(logInFx.doneData, (state, data) => {
    return {
      status: "logged in",
      data,
    };
  })
  .on(logInFx.failData, (state, error) => {
    return {
      status: "feilure",
      errors: [error],
    };
  });
// .on(logOut, (state) => ({status: 'logout'}))
