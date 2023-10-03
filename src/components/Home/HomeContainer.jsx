import React from 'react'
import Hero from './Hero/Hero'
import './home.css'
import AboutHome from './AboutUs/AboutHome'
import SliderHomeContainer from './SliderHome/SliderHomeContainer'



const HomeContainer = () => {
  return (
    <div>
        <Hero/>
        <div className={'w-full h-screen hero'}></div>
        {/* <div id='herocontainer' className={'w-full h-[110vh] lg:h-[100vh] hero'}></div>
        <img src='https://res.cloudinary.com/dbwomkmnq/image/upload/v1695925820/WarHouse%20Frenchies/layered-waves-haikei_9_ukqm4c.svg' id='wavesxl' className={'hidden mt-[-600px] relative z-10'} />
        <img src='https://res.cloudinary.com/dbwomkmnq/image/upload/v1695925820/WarHouse%20Frenchies/layered-waves-haikei_9_ukqm4c.svg' id='waveslg' className={'hidden lg:block mt-[-280px] relative z-10'}/>
        <img src='https://res.cloudinary.com/dbwomkmnq/image/upload/v1695924991/WarHouse%20Frenchies/layered-waves-haikei_6_sdbpja.svg' className={'hidden md:block lg:hidden mt-[-820px] relative z-10'}/>
        <img src='https://res.cloudinary.com/dbwomkmnq/image/upload/v1695925284/WarHouse%20Frenchies/layered-waves-haikei_8_tdlnsp.svg' className={'md:hidden relative mt-[-530px]  z-10'}/> */}
        <AboutHome/>
        <SliderHomeContainer/>  
        
    </div>
  )
}

export default HomeContainer