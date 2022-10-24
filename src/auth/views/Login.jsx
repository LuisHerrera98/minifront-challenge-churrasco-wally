import React from 'react'
import { FormLogin } from '../components/FormLogin'
import '../stylesheets/login.css'

export const Login = () => {
  return (
    <>
        <div className='container__logo'>
            <img className='logo' src="https://wally-ecommerce-images.s3.us-west-2.amazonaws.com/static/b2b/logo-black.png" alt="" />
        </div>
        <FormLogin />
    
    </>
  )
}