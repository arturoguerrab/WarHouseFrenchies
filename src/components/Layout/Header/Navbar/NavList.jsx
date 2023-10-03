import React from 'react'
import NavItem from './NavItem'
import { containerClass } from '../../../../utils/ClassRepeated'
import { useTranslation } from 'react-i18next'

const NavList = () => {

    const [t] = useTranslation('global')

    return (
        <ul className={containerClass + "flex flex-row justify-evenly gap-2 font-semibold"}>
                <NavItem nombre={t('navbar.about')} to='/about'/>
                <NavItem nombre={t('navbar.puppies')} to='/puppies'/>
                <NavItem nombre={t('navbar.contact')} to='/contact'/>
        </ul>
    )
}

export default NavList