import React from 'react'

import TogglersContainer from './Togglers/TogglersContainer';
import NavbarContainer from './Navbar/NavbarContainer';
import { DevBoxDesing, containerClass } from '../../../utils/ClassRepeated';
import SideBar from './Sidebar/SideBar';
import { NavLink } from 'react-router-dom';


const HeaderContainer = () =>{


    return (
        <header className={"w-full py-1 fixed bg-white z-20"}>

            <div className={containerClass + "flex justify-between lg:grid lg:grid-cols-12 items-center"}>
                <SideBar/>
                <NavLink to={'/'} className={'text-black text-center font-semibold'}>WarHouseFrenchies</NavLink>
                <NavbarContainer/>
                <TogglersContainer/>
            </div>

        </header>
    );
}

export default HeaderContainer