import React from 'react'

const ContactForm = () => {
  return (
    <form action="" className='flex flex-col w-full gap-3'>
        <label htmlFor="name" className='bg-white rounded-xl p-2 flex'>Name:
          <input type="text" id='name' className='ms-2 w-full outline-none' required/>
        </label>
        <label htmlFor="email" className='bg-white rounded-xl p-2 flex'>Email: 
          <input type="email" id='email' className='ms-2 w-full outline-none' required/>
        </label>
        <label htmlFor="message" className='bg-white rounded-xl p-2 flex'>Message: 
          <textarea type="text" id='message' className='ms-2 w-full outline-none' cols="30" rows="5" required/>
        </label>
        <input type="submit" className='w-[180px] h-[40px] self-center bg-primary hover:bg-secondary rounded-lg text-white font-medium' />
    </form>
  )
}

export default ContactForm