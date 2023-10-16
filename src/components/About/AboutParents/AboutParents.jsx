import React from 'react'
import { containerClass } from '../../../utils/ClassRepeated'
import PuppiesPresentation from '../../Puppies/PuppiesPresentation/PuppiesPresentation'

const AboutParents = ({puppies}) => {
    return (
        <div className={containerClass + 'bg-white relative z-10 flex flex-col gap-10 py-10 justify-center items-center'}>
            <h2 className=' text-left text-3xl md:text-6xl lg:place-self-start lg:ml-12 font-bold text-secondary'>Meet our<br/><span className='text-black ml-6 lg:ml-20'>mommies & daddies</span></h2>
            <section className={'w-full bg-[#ffffff] relative z-10'}>
                <PuppiesPresentation puppies={puppies} />
            </section>
        </div>
    )
}

export default AboutParents