import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to Log in')
        }

        setLoading(false)
        navigate('/table');
    }

    return (
        <div className="browser">
            <div className="login">
                <div className="img-logo">
                    <img src={require("../logoRNI.png")} style={{position: 'absolute', transform: 'translateY(-40px)'}} alt="logo RNI" width={200} height={200}/>
                </div>
                <h1>Ingresar</h1>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="animation-container">
                        <input className="form-input" ref={emailRef} type="text" name="name" id="name" autoComplete="off" required />
                        <label name="name" className="label-name">
                            Email
                        </label>
                    </div>
                    <div className="animation-container">
                        <input className="form-input" ref={passwordRef} type="password" name="password" id="password" autoComplete="off" required />
                        <label name="password" className="label-name">
                            Contraseña
                        </label>
                    </div>
                    <button disabled={loading} className="login-btn">Ingresar</button>
                </form>

                <p>¿No tienes una cuenta?  <Link to='/signup'>Registrate</Link> </p>
            </div>
        </div>
    )
}
