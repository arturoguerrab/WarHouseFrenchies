import React from 'react'
import Hero from './Hero/Hero'
import './home.css'
import AboutHome from './AboutUs/AboutHome'
import SliderHome from './SliderHome/SliderHome'



const HomeContainer = () => {
  return (
    <div className='hero'>
        <Hero/>
        <div className='w-screen h-screen bg-transparent'></div>
        <div className='seccionOne h-80 bg-transparent relative z-10'>container</div>
        <AboutHome/>
        <SliderHome/>
    </div>
  )
}

export default HomeContainer