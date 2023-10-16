import React from 'react'
import Values from '../../Home/AboutUs/Values'
import { DevBoxDesing, containerClass } from '../../../utils/ClassRepeated'

const ValuesAbout = () => {
  return (
    <section className={containerClass + 'bg-white relative z-10 flex flex-col md:flex-row justify-evenly items-center gap-10 mt-[-2px] py-24'}>
        <div className=' p-8 flex flex-col gap-4'>
            <Values name={'Value'} text={'text-2xl font-semibold text-complement'} src={"https://res.cloudinary.com/dbwomkmnq/image/upload/v1696367784/WarHouse%20Frenchies/Vector_1_rntrth.png"}/>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, inventore.</p>
        </div>
        <div className=' p-8 flex flex-col gap-4'>
            <Values name={'Value'} text={'text-2xl font-semibold text-complement'} src={"https://res.cloudinary.com/dbwomkmnq/image/upload/v1696367784/WarHouse%20Frenchies/Vector_1_rntrth.png"}/>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, inventore.</p>
        </div>
        <div className=' p-8 flex flex-col gap-4'>
            <Values name={'Value'} text={'text-2xl font-semibold text-complement'} src={"https://res.cloudinary.com/dbwomkmnq/image/upload/v1696367784/WarHouse%20Frenchies/Vector_1_rntrth.png"}/>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, inventore.</p>
        </div>
    </section>
  )
}

export default ValuesAbout