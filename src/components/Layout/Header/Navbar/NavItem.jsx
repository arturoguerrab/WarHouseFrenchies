import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({nombre, to, className}) => {
  return (
    <NavLink to={to} className={({isActive})=> isActive ? `text-secondary ${className}` : `text-black hover:text-complement ${className}`}>
      <li>{nombre}</li>           
    </NavLink>
  )
}

export default NavItem