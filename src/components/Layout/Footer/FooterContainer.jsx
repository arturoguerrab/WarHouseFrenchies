import React from 'react'
import { DevBoxDesing, containerClass } from '../../../utils/ClassRepeated'
import { NavLink } from 'react-router-dom'
import ContactIcons from './Contact/ContactContainer'
import NavList from '../Header/Navbar/NavList'


const FooterContainer = () => {
  return (
    <footer className="relative z-20 flex h-[30vh] items-center bg-background ">
      {/* <img className='w-full' src="https://res.cloudinary.com/dbwomkmnq/image/upload/v1696372776/WarHouse%20Frenchies/layered-waves-haikei_10_jraa9x.svg" alt="" /> mt-[-7rem] md:mt-[-15rem] 2xl:mt-[-20rem] p-20 */}
      <div className={containerClass+ "flex flex-col h-4/6 justify-evenly items-center"}>
        <ContactIcons/>
        <NavLink to={'/'} className={'text-secondary text-center text-lg font-semibold '}>WarHouse Frenchies © 2023</NavLink>
        <div className={'w-80 flex justify-center text-lg'}>
          <NavList/>
        </div>
      </div>
    </footer>
  )
}

export default FooterContainer