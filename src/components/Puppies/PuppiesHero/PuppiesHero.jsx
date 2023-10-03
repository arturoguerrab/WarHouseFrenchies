import React from 'react'
import { containerClass } from '../../../utils/ClassRepeated'
import Btn from '../../Samples/Btn'

const PuppiesHero = () => {
  return (
    <div className={containerClass + 'h-screen mt-12 grid grid-cols-12 grid-rows-5 fixed left-0 right-0 '}>
        <div className={'col-span-12 lg:col-span-4 lg:col-start-2 row-span-3 row-start-1 landscape:row-start-2 lg:row-start-2 lg:mt-[-70px] text-center flex flex-col justify-center items-center'}>
          <h2 className='text-6xl font-bold text-secondary'>Meet our<br/><span className='text-black ml-6 lg:ml-20'>puppies</span></h2>
        </div>
    </div>
  )
}

export default PuppiesHero