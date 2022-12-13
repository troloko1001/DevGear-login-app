import { useStoreMap } from "effector-react"

import { handleChange, $loginData } from "./input-model"


export const LoginInput = ({name, type, placeholder}) => {

  const value = useStoreMap({
    store: $loginData,
    keys: [name],
    fn: values => values[name] || ''
  })


  return (
    <input
    value={value} 
    onChange={(e) => handleChange(e)} 
    type={type} 
    name={name} 
    placeholder={placeholder} 
    />
  )
}