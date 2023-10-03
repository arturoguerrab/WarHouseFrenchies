import React from 'react'

import TogglersContainer from './Togglers/TogglersContainer';
import NavbarContainer from './Navbar/NavbarContainer';
import { DevBoxDesing, containerClass } from '../../../utils/ClassRepeated';
import SideBar from './Sidebar/SideBar';
import { NavLink } from 'react-router-dom';


const HeaderContainer = () =>{


    return (
        <header className={"fixed z-20 w-full py-1 bg-white"}>

            <div className={containerClass + "flex lg:grid lg:grid-cols-12 justify-between items-center"}>
                <SideBar/>
                <NavLink to={'/'} className={'text-black text-center font-semibold'}>WarHouseFrenchies</NavLink>
                <NavbarContainer/>
                <TogglersContainer/>
            </div>

        </header>
    );
}

export default HeaderContainer