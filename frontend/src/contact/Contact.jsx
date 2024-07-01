import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactPage from '../components/ContactPage'

function Contact() {
  return (
    <>
    <Navbar /> 
    <div className='min-h-screen'>
    <ContactPage />
    </div>
    <Footer /> 
    </>
  )
}

export default Contact
