import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'
import { DevBoxDesing, containerClass } from '../../../../utils/ClassRepeated'
import { useTranslation } from 'react-i18next'

const NavList = () => {
    const [t] = useTranslation('global')

    return (
        <ul className={containerClass + "flex gap-2 flex-row justify-evenly font-semibold"}>

            <NavLink to='/about' className={({isActive})=> isActive ? 'text-secondary' : 'text-black hover:text-complement'}>
                <NavItem nombre={t('navbar.about')}/>
            </NavLink>

            <NavLink to='/puppies' className={({isActive})=> isActive ? 'text-secondary' : 'text-black hover:text-complement'}>
                <NavItem nombre={t('navbar.puppies')}/>
            </NavLink>

            <NavLink to='/contact' className={({isActive})=> isActive ? 'text-secondary' : 'text-black hover:text-complement'}>
                <NavItem nombre={t('navbar.contact')}/>
            </NavLink>
            
        </ul>
    )
}

export default NavList