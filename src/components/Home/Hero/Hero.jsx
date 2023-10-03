import React from 'react'
import '../home.css'
import {containerClass } from '../../../utils/ClassRepeated'
import Btn from '../../Samples/Btn'


const Hero = () => {
  return (
    <div className={containerClass + 'h-screen mt-12 grid grid-cols-12 grid-rows-5 fixed left-0 right-0 '}>
        <div className={'col-span-12 lg:col-span-4 lg:col-start-2 row-span-3 row-start-1 landscape:row-start-2 lg:row-start-2 lg:mt-[-70px] text-center flex flex-col justify-center items-center'}>
            <h1 className='text-secondary font-bold text-6xl'>WarHouse</h1>
            <h2 className='pl-20 font-bold text-6xl'>Frenchies</h2>
            <p className='font-semibold w-3/4 py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi!</p>
            <Btn style={'w-[180px] h-[40px] self-center'} to={'/puppies'} text={'Ver Mas'}/>
        </div>

    </div>
  )
}

export default Hero