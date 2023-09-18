import React from 'react'
import ContactIcons from '../Layout/Footer/Contact/ContactContainer'
import ContactForm from './ContactForm/ContactForm'

const ContactContainer = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center h-screen w-screen bg-blue-gray-300 gap-20 '>
        <div className='w-3/12 flex flex-col justify-center items-center pt-24'>
            <h1>Contactanos</h1>
            <p>Lorem ipsum dolor sit amet conseiciendis illum blanditiis harum.</p>
            <ContactIcons/>
        </div>
        <ContactForm/>
    </div>
  )
}

export default ContactContainer