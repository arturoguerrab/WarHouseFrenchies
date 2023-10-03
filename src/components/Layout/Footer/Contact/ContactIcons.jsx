import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

const ContactIcons = () => {
  return (
      <div className='flex gap-3'>
        <Link to={'https://www.instagram.com/warhousefrenchies2021/'} target='_blank'><InstagramIcon sx={{fontSize:30}}/></Link>
        <Link to={'https://wa.me/14078641606'} target='_blank'><WhatsAppIcon sx={{fontSize:30}}/></Link>
        <Link to={'https://www.youtube.com/@warhousefrenchies1680'} target='_blank'><WhatsAppIcon sx={{fontSize:30}}/></Link>
      </div>
  )
}

export default ContactIcons 