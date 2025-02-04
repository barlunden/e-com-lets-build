/* eslint-disable @typescript-eslint/no-unused-vars */

import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router'
import UserProfile from './pages/UserProfile'
import Users from './pages/Users'
import Home from './pages/Home'

function App() {
  

  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" Component={Home} />  
    <Route path="/user" Component={Users} />
    <Route path="/user/:userID" Component={UserProfile} />
    </Routes>
    </>
  )
}

export default App
