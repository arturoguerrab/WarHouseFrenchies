import React from 'react'
import PuppiesPresentation from './PuppiesPresentation/PuppiesPresentation'
import { DevBoxDesing } from '../../utils/ClassRepeated'

const PuppiesContainer = () => {
  return (
    <div>
        <div className=' w-screen h-screen bg-black text-white flex justify-center items-center'>PUPPIES HERO SECCION </div>
        <section className={DevBoxDesing + 'w-screen bg-[#ffffff]'}>
            <PuppiesPresentation side={1}/>
            <PuppiesPresentation/>
            <PuppiesPresentation side={1}/>
            <PuppiesPresentation/>
        </section>

    </div>
  )
}

export default PuppiesContainer