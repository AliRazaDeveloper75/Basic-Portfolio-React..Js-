import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
  return (
  <>
    <Navbar/>
    <HeroImg2 heading="PROJECT'S." text="Some of my most recent Work." />
    <Work/>
    <PricingCard/>
    <Footer/>
  </>
  )
}

export default Project
