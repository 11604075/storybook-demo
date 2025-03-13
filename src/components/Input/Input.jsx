import React from 'react'
import './Input.css'
function Input(props) {
  const {type,placeholder,onChange} = props
  return (
    <input type={type} placeholder={placeholder}  onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input