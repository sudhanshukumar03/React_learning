import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import UserContext from './context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Chai aur code learning Context APi</h1>
      <Login />
      <Profile />
    </UserContextProvider>
   
  )
}

export default App
