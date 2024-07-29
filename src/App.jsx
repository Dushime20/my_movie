import Home from "./Component/Home/Home"
import Navbar from "./Component/Layout/Navbar"
import { Route, BrowserRouter as Router, Routes  } from "react-router-dom"

function App() {
  
  return (
    <>
      <Router>
      <Navbar/>
         <Routes >
          <Route path="/" element={<Home/>}/>
            
          
         </Routes>
      </Router>

    </>
  )
}

export default App
