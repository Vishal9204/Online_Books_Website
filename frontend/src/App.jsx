import React from 'react' ;
import {Route , Routes} from "react-router-dom" ;
import Home from "./home/Home" ;
import Courses from "./courses/Courses" ;
import Contact from "./contact/Contact" ;
import About from "./about/About" ;

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/Courses" element = {<Courses/>} />
      <Route path = "/Contact" element = {<Contact />} />
      <Route path = "/About" element = {<About />} /> 
    </Routes>
    </>
  )
}

export default App ;
