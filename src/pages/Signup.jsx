import React from 'react'
import './Signup.css'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'

function Signup() {
  return (
    <div className='page-wrapper'>
        <div className='login-container'>
        <h1 className='title'>Create An Account</h1>
        <p className='subtitle'>Create an account to enjoy all the services without any ads for free!</p>
        <form>
        <Input placeholder="Email Address"/>
        <Input placeholder="password"/>
        <Button name="Create Account" onClick={()=>console.log("hii")}/>
        </form>
    
        </div>
      
    </div>
  )
}

export default Signup