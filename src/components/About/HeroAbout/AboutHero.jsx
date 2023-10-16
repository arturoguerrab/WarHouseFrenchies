import React from 'react'
import { DevBoxDesing, containerClass } from '../../../utils/ClassRepeated'

const AboutHero = () => {
    return (
        <div className={containerClass + 'h-screen mt-12 grid grid-cols-12 grid-rows-5 fixed left-0 right-0 '}>
            <div className={'col-span-12 lg:col-span-5 lg:col-start-2 row-span-5 row-start-1 landscape:row-start-1 lg:row-start-2 lg:mt-[-70px] text-center flex flex-col gap-10 justify-center items-center'}>
                <h1 className='text-6xl font-bold text-secondary'>The Love<br/><span className=' text-complement ml-6 lg:ml-20'>& the care</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum deleniti assumenda ullam, animi sit nihil laborum repellendus</p>
            </div>
        </div>
    )
}

export default AboutHero 