import React from 'react'
import './Button.css'
function Button(props) {
  const {name} = props
  return (
    <button>{name}</button>
  )
}

export default Button