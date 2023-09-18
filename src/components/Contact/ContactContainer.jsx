import React from 'react'
import ContactIcons from '../Layout/Footer/Contact/ContactContainer'
import ContactForm from './ContactForm/ContactForm'

const ContactContainer = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-blue-gray-300 gap-20'>
        <div className='w-3/12 flex flex-col justify-center items-center'>
            <h1>Contactanos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, odit! Ipsa inventore ratione amet aspernatur quibusdam reiciendis illum blanditiis harum.</p>
            <ContactIcons/>
        </div>
        <ContactForm/>
    </div>
  )
}

export default ContactContainer