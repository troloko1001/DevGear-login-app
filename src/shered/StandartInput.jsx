const setField = createEvent()

const handleChange = setField.prepend(e => {
  key: e.target.name
  value: e.target.value
})


export const StandartInput = (props) => {
  const {value, fn, type, name, placeholder} = props.state

  return (
    <input
    value={value} 
    onChange={(e) => fn(e.target.value)} 
    type={type} 
    name={name} 
    placeholder={placeholder} 
    />
  )
}