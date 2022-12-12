
export const Button = ({type, text, fn, param}) => {  
  
  return(
    <button 
    onClick={() => fn(param)}
    type={type}
    >{text}
    </button>
  )
}