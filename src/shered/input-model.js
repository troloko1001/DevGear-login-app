import { createStore, createEvent } from "effector";

const setField = createEvent()

export const handleChange = setField.prepend(e => ({
  key: e.target.name,
  value: e.target.value
}))

export const $loginData = createStore({})
.on(setField, (state, {key, value}) => ({
  ...state, 
  [key]: value
}))
