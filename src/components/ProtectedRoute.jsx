import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import {Route, Navigate} from 'react-router-dom'

export default function ProtectedRoute({element: Element, ...rest}) {
  const {currentUser}= useAuth()

  return (
    <Route 
      {...rest}
      render={props => {
        currentUser ? <Element {...props}/> : <Navigate to='/login'/>
      }}
    />
  )
}
