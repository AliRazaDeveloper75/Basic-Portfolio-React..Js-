import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <HeroImg2 heading="CONTACT" text="Let have a chat" />
      <Form/>
      <Footer/>
    </>
  )
}

export default Contact
