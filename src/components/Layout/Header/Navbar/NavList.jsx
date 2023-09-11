import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'
import { containerClass } from '../../../../utils/ClassRepeated'
import { useTranslation } from 'react-i18next'

const NavList = ({setOpenNav}) => {
    const [t] = useTranslation('global')

    return (
        <ul className={containerClass + "pb-4 pt-2 md:pb-0 md:pt-0 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:justify-evenly bg-white md:bg-transparent lg:border-0  border-solid border-t-2 border-gray-200"}>
            
            <NavLink to='/' onClick={setOpenNav}>
                <NavItem nombre={t('navbar.home')}/>
            </NavLink>

            <NavLink to='/about' onClick={setOpenNav}>
                <NavItem nombre={t('navbar.about')}/>
            </NavLink>

            <NavLink to='/puppies' onClick={setOpenNav}>
                <NavItem nombre={t('navbar.puppies')}/>
            </NavLink>

            <NavLink to='/contact' onClick={setOpenNav}>
                <NavItem nombre={t('navbar.contact')}/>
            </NavLink>
            
        </ul>
    )
}

export default NavList