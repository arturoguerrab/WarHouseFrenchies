import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import {containerClass } from '../../utils/ClassRepeated'

const ContactContainer = () => {
  return (
    <div className={'w-full hero'}>
      <div className={containerClass + 'py-32 flex flex-col md:h-screen justify-center items-center gap-4'}>
        <h1 className='text-5xl font-semibold text-complement '>Contact us</h1>
        <div className='w-full md:w-5/12 flex flex-col justify-center items-center gap-5'>
          {/* <ContactIcons/> */}
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactContainer