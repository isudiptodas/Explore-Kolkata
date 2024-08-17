import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import LandingPage from './LandingPage'
import About from './pages/About'
import Places from './pages/Places'
import Hotels from './pages/Hotels'
import Restaurants from './pages/Restaurants'

const App = () => {

  let location = useLocation();
  let isLanding = location.pathname === '/'

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/places" element={<Places/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/restaurants" element={<Restaurants/>} />
      </Routes>
      
    </>
  )
}

export default function WrappedApp(){
  return(
    <Router>
       <App/>
    </Router>
  )
}
