import { LoginEventType, LoginStoreType } from "./../api/login-input-api";
import React from "react";
import { createStore, createEvent } from "effector";

const setField = createEvent<LoginEventType>();

export const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void =
  setField.prepend((e) => ({
    key: e.target.name,
    value: e.target.value,
  }));

export const $loginData = createStore<LoginStoreType>({
  password: "",
  email: "",
}).on(setField, (state, { key, value }: LoginEventType) => ({
  ...state,
  [key]: value,
}));
