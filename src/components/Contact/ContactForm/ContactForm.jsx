import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form action="" className='flex flex-col w-64'>
            <label htmlFor="name">Nombre</label>
            <input type="text" id='name'/>
            <label htmlFor="lastname">Apellido</label>
            <input type="text" id='lastname'/>
            <label htmlFor="email">Email</label>
            <input type="email" id='email'/>
            <label htmlFor="message">Mensaje</label>
            <input type="text" id='message'/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default ContactForm