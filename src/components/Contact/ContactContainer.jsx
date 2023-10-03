import React from 'react'
import ContactIcons from '../Layout/Footer/Contact/ContactContainer'
import ContactForm from './ContactForm/ContactForm'
import { DevBoxDesing, containerClass } from '../../utils/ClassRepeated'

const ContactContainer = () => {
  return (
    <div className={'w-full bg-[#E7E6E8] pt-28 mb-[-2px]'}>
      <div className={containerClass + 'flex flex-col md:flex-row md:h-[70vh] justify-evenly items-center gap-4'}>
        <div className='w-full md:w-5/12 flex flex-col justify-center items-center gap-5'>
          <h1 className='text-5xl font-semibold text-complement '>Contact us</h1>
          {/* <ContactIcons/> */}
          <ContactForm/>
        </div>
        <img className='w-full md:w-5/12 m-10' src="https://res.cloudinary.com/dbwomkmnq/image/upload/v1696365950/WarHouse%20Frenchies/retrato-hermoso-perro-raza-pura-cachorro-bulldog-frances-posando-mirando-camara-aislada-sobre-fondo-gris-estudio_1_aub2gn.png" alt="" />
      </div>
    </div>
  )
}

export default ContactContainer