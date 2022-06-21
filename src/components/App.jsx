import React from 'react'
import { HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import '../App.css';
import NotFound from './NotFound'
import Table from './Table'
import { Login } from './Login'
import Signup from './Signup'
import { AuthProvider } from '../contexts/AuthContext'
import PrivateRoute from './PrivateRoute'



function App() {


  return (
    <HashRouter >
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Navigate to='Login'/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />

          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/table/*' element={<Table/>}/>
          </Route>

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
