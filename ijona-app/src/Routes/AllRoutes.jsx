import React from 'react'
import { Route,Routes } from 'react-router'
import User from '../components/User'
import Login from '../components/Login'
import Signup from '../components/Signup'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<User/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes