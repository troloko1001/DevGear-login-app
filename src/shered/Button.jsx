
export const Button = ({type = 'button', text, fn, param}) => {  
  
  return(
    <button 
    onClick={() => fn(param)}
    type={type}
    >{text}
    </button>
  )
}