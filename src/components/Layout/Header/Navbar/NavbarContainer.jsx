import React from 'react'
import NavList from './NavList'

const NavbarContainer = () => {
    return (
        <nav className="hidden col-span-4 col-start-8 lg:block">
            <NavList/>
        </nav>
    )
}

export default NavbarContainer