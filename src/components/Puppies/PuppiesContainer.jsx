import React from 'react'
import PuppiesPresentation from './PuppiesPresentation/PuppiesPresentation'
import PuppiesHero from './PuppiesHero/PuppiesHero'

const PuppiesContainer = () => {
  return (
    <div>
      <PuppiesHero/>
      <div className=' w-full h-screen bg-[url(https://res.cloudinary.com/dbwomkmnq/image/upload/v1696354276/WarHouse%20Frenchies/fernando-jorge-2dtCoIe0DKM-unsplash_bp3uci.jpg)] bg-cover bg-center bg-fixed'></div>
      <section className={'w-full bg-[#ffffff] relative z-10'}>
          <PuppiesPresentation side={1} sex={'male'}/>
          <PuppiesPresentation/>
          <PuppiesPresentation side={1}/>
          <PuppiesPresentation sex={'male'}/>
      </section>

    </div>
  )
}

export default PuppiesContainer