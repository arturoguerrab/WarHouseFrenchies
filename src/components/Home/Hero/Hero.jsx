import React from 'react'
import '../home.css'
import { DevBoxDesing, containerClass } from '../../../utils/ClassRepeated'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className={containerClass + 'h-screen mt-12 grid grid-cols-12 grid-rows-5 fixed left-0 right-0 '}>
        <div className={'col-span-12 lg:col-span-4 lg:col-start-2 row-span-3 row-start-1 landscape:row-start-2 lg:row-start-2 lg:mt-[-70px] text-center flex flex-col justify-center items-center'}>
            <h1 className='text-secondary font-bold text-6xl'>WarHouse</h1>
            <h2 className='pl-20 font-bold text-6xl'>Frenchies</h2>
            <p className='font-semibold w-3/4 py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi!</p>
            <Link to={'/puppies'}>
              <button className='bg-primary hover:bg-secondary rounded-lg text-white font-medium w-[180px] h-[40px] self-center'>Ver mas</button>
            </Link> 
        </div>

    </div>
  )
}

export default Hero