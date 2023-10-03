import React from 'react'
import NavList from './NavList'

const NavbarContainer = () => {
    return (
        <nav className="hidden lg:block col-span-4 col-start-8">
            <NavList/>
        </nav>
    )
}

export default NavbarContainer