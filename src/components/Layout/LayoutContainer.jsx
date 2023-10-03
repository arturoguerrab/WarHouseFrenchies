import React from 'react'
import HeaderContainer from './Header/HeaderContainer'
import FooterContainer from './Footer/FooterContainer'
import { Link } from 'react-router-dom'


const Layout = ({children}) => {
  return (
    <div>
        <HeaderContainer/>
            {children}
          <Link to={'https://wa.me/14078641606'} target='_blank' >
            <img className={'fixed z-30 bottom-7 right-1 h-[75px] w-[75px] bg-transparent'} src="https://static.vecteezy.com/system/resources/previews/021/460/383/original/whatsapp-logo-free-png.png" alt="" />
          </Link>
        <FooterContainer/>
    </div>
  )
}

export default Layout