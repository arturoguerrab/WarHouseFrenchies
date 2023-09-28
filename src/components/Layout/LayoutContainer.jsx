import React from 'react'
import HeaderContainer from './Header/HeaderContainer'
import FooterContainer from './Footer/FooterContainer'
import { NavLink } from 'react-router-dom'


const Layout = ({children}) => {
  return (
    <div>
        <a name='ancla'></a>
        <HeaderContainer/>
            {children}
          <NavLink to={'https://wa.me/14078641606'} target='_blank'>
            <button className='fixed z-30 bottom-[2.8rem] right-[1.3rem] h-[45px] w-[45px] bg-transparent'><img className='fixed z-30 bottom-7 right-1 bg h-[80px] w-[80px]' src="https://static.vecteezy.com/system/resources/previews/021/460/383/original/whatsapp-logo-free-png.png" alt="" /></button>
          </NavLink>
        <FooterContainer/>
    </div>
  )
}

export default Layout