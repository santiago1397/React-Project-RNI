import React, { useState, useEffect } from 'react'
import { useNavigate, Routes, Route, Navigate, NavLink } from 'react-router-dom'
import Innovators from './Innovators'
import navbar from './navbar'
import Stadistics from './Stadistics'

import { useAuth } from '../contexts/AuthContext'
import { db } from '../Firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import * as XLSX from 'xlsx'

import '../App.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineLogout } from 'react-icons/md'
import { CNavbar } from './styles'


export default function Table() {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState()
  const navigate = useNavigate()

  const [innovators, setInnovators] = useState([])
  const innoCollectionRef = collection(db, "innovators")

  const [toggleNav, setToggleNav] = useState(false)

  //Executed once  
  useEffect(() => {
    const getInnovators = async () => {
      const data = await getDocs(innoCollectionRef);
      console.log(data)
      setInnovators(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getInnovators()
    console.log(innovators)
  }, [])

  //Function to add multiple innovators from excel
  const addMultiple = async (e) => {

    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data)

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet)

    //funtion to add innovator individualy
    const addM = async (inn) => {
      const current = new Date()
      inn.diaRegistro = current.getDate()
      inn.mesRegistro = current.getMonth()
      inn.añoRegistro = current.getYear()
      await addDoc(innoCollectionRef, inn)
    }

    //jsonData.forEach(addM) .slice(0, 10)
    jsonData.forEach(addM)

    //after adding the new innovators we take the new list from the server
    const getInnovators = async () => {
      const data = await getDocs(innoCollectionRef);
      console.log(data)
      setInnovators(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getInnovators()
  }

  //Function to add single Innovator
  async function add(e) {
    await addDoc(innoCollectionRef, e)

    //after adding the new innovator we take the new list from the server
    const getInnovators = async () => {
      const data = await getDocs(innoCollectionRef);
      console.log(data)
      setInnovators(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getInnovators()
    console.log(innovators)
  }

  //Function to logout
  async function handleLogout() {
    setError('')
    try {
      await logout()
      navigate('/login')
    } catch {
      setError('cant logout')
    }
  }


  function toggleNavbar() {
    setToggleNav(!toggleNav)
  }

  return (
    <div>
      <header>
        <div>
          <div className="nav-logo">
            <GiHamburgerMenu className="navIcon" size="25px" onClick={toggleNavbar} />
          </div>
          {/*<div style={{backgroundColor:"#000000", width:"20px", height:"20px"}}>

  </div>*/}
        </div>
      </header>

      <div className="my-container">
        <CNavbar clicked={toggleNav}>
          <ul className="navList">
            <li className="nav-logo-mobile"><GiHamburgerMenu className="navIcon" size="25px" onClick={toggleNavbar} /></li>
            {navbar.map((item) => {
              return (
                <NavLink className={({ isActive }) => isActive ?
                  (toggleNav ? 'nav-items active' : 'nav-items-hidden active') :
                  (toggleNav ? 'nav-items' : 'nav-items-hidden')}
                  to={item.path}>
                  {item.icon}<p>{item.name}</p>
                </NavLink>

              )
            })}
          </ul>
          <div className="account-management">
            {toggleNav ?
              <div>
                <h3>Account:</h3>
                <p>{currentUser.email}</p>
                <button onClick={handleLogout} className="logout-btn"><MdOutlineLogout className="nav-icons" size="30px" />Log out</button>
              </div> :
              <div>
                <button onClick={handleLogout} className="toggle-logout-btn"><MdOutlineLogout className="nav-icons" size="30px" /></button>
              </div>}
          </div>
        </CNavbar>
        <div className={toggleNav ? 'content' : 'content-less'}>
          <Routes>
            <Route exact path="/" element={<Navigate to='innovators' />} />
            <Route path="Innovators" element={<Innovators innovators={innovators} add={add} addMultiple={addMultiple} toggleNav={toggleNav} />} />
            <Route path="Stadistics" element={<Stadistics innovators={innovators} />} />
            {/*<Route path="Staff" element={<Staff />} />*/}
          </Routes>
        </div>
      </div>
    </div>
  )
}
