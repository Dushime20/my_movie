import React from 'react'

import Home from '../Component/Home/Home'
import Navbar from '../Component/Layout/Navbar'
import { Route, BrowserRouter as Router, Routes  } from "react-router-dom"
import MovieDetails from '../Component/MovieDetails/MovieDetails'
import PlayNow from '../Component/PlayNow/PlayNow'
const AppRoute = () => {
  return (
    <div>
        <Router>
            <Navbar/>
              <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:id" element={<MovieDetails/>}/>
          <Route path='/playvideo/:id' element={<PlayNow/>} />
            
          
         </Routes>
      </Router>
      
    </div>
  )
}

export default AppRoute
