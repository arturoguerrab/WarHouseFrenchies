import React from 'react'
import '../home.css'
import { containerClass } from '../../../utils/ClassRepeated'

const Hero = () => {
  return (
    <div className={containerClass + 'h-screen flex flex-col gap-5 sm:flex-row items-center justify-center fixed top-0 left-0 right-0 pt-24'}>
        <div className='flex flex-col flex-grow-0'>
            <h1 className='text-center text-black'>WarHouse<br className='md:hidden'/>Frenchies</h1>
            <button className='bg-[#5E6472] text-white w-3/6 self-center'>Ver mas</button>
            <h2 className='text-center text-black'>Lorem ipsum dolor sit amet</h2>
        </div>
        <img className='h-[400px] w-[400px]' src="https://a.storyblok.com/f/152976/935x1121/da1e71e22d/french-bulldog-insurance.png" alt="" />
    </div>
  )
}

export default Hero