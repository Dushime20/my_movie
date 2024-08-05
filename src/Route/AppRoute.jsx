import React from 'react'

import Home from '../Component/Home/Home'
import Navbar from '../Component/Layout/Navbar'
import { Route, BrowserRouter as Router, Routes  } from "react-router-dom"
import MovieDetails from '../Component/MovieDetails/MovieDetails'
import PlayNow from '../Component/PlayNow/PlayNow'
import Login from '../Component/Authentication/Login'
import Register from '../Component/Authentication/Register'
import ProtecedRoute from './ProtecedRoute'
import { AuthProvider } from '../Firebase/AuthContext'
const AppRoute = () => {
  return (
    <div>
      <AuthProvider>
      <Router>
            <Navbar/>
              <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:id" element={
            <ProtecedRoute>
              <MovieDetails/>
            </ProtecedRoute>
            }/>
          <Route path='/playvideo/:id' element={<PlayNow/>} />
          <Route path='/login-signup' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
            
          
         </Routes>
      </Router>
      </AuthProvider>
       
      
    </div>
  )
}

export default AppRoute
