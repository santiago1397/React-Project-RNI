import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import{ Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
  const [error, setError] = useState('')
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('passwords don´t match')
    }

    try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
    }catch{
        setError('Failed to create an Account')
    }
    
    setLoading(false)
    navigate('/login');
  }


  return (
    <div className="browser">
        <div className="sign-up">
            <div className="img-logo">
                <img src={require("../logoRNI.png")} style={{position: 'absolute', transform: 'translateY(-40px)'}} alt="logo RNI" width={200} height={200}/>
            </div>
            <h1>Registrar</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="animation-container">
                    <input className="form-input" ref={emailRef} type="text" name="name" id="name" autoComplete="off"  required/> 
                    <label name="name" className= "label-name">
                        Email
                    </label>  
                </div>
                <div className="animation-container">
                    <input className="form-input" ref={passwordRef} type="password" name="password" id="password" autoComplete="off"  required/> 
                    <label name="password" className= "label-name">
                        Contraseña
                    </label>   
                </div>
                <div className="animation-container">
                    <input className="form-input" ref={passwordConfirmRef} type="password" name="repeate-password" id="repeate-password" autoComplete="off"  required/> 
                    <label name="repeate-password" className= "label-name">
                        Repetir Contraseña
                    </label>   
                </div>
                <button disabled={loading} className="login-btn">Registrar</button> 
            </form>
            <p>¿Ya tienes una cuenta? <Link to='/login'>Ingresa</Link></p>
        </div>
    </div>
  )
}
