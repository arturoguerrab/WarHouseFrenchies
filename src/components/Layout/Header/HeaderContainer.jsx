import React from 'react'

import TogglersContainer from './Togglers/TogglersContainer';
import NavbarContainer from './Navbar/NavbarContainer';
import { DevBoxDesing, containerClass } from '../../../utils/ClassRepeated';
import SideBar from './Sidebar/SideBar';
import { NavLink } from 'react-router-dom';


const HeaderContainer = () =>{


    return (
        <header className="w-screen py-2 fixed bg-white">

            <navbar className={containerClass + "flex justify-between lg:grid lg:grid-cols-12 items-center"}>
                <SideBar/>
                <NavLink to={'/'} className={'text-black text-center '}>WarHouseFrenchies</NavLink>
                <NavbarContainer/>
                <TogglersContainer/>
            </navbar>

        </header>
    );
}

export default HeaderContainer