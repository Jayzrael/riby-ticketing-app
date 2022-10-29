import React from 'react'

const Button = ({ ButtonText, ClassName, HandleOpen }) => {
   return (
      <button className={ClassName} onClick={HandleOpen}>{ButtonText}</button>
   )
}

export default Button