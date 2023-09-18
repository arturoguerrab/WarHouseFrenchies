import React from 'react'

const AboutHome = () => {
  return (
    <section className='bg-[#ffffff] h-screen relative z-10 flex justify-around items-center'>
        <img className='h-[400px] w-[400px] hidden lg:block' src="https://i.stack.imgur.com/Mf15d.png" alt="" />
        <div>
            <h2 className='text-6xl p-4'>About us</h2>
            <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, totam.</p>
            <div className='flex justify-evenly'>
                <img className='h-[100px] w-[100px]' src="https://www.petsbureau.co.uk/wp-content/uploads/2021/07/hero-profile-dog.png" alt="" />
                <img className='h-[100px] w-[100px]' src="https://www.petsbureau.co.uk/wp-content/uploads/2021/07/hero-profile-dog.png" alt="" />
                <img className='h-[100px] w-[100px]' src="https://www.petsbureau.co.uk/wp-content/uploads/2021/07/hero-profile-dog.png" alt="" />
            </div>
            <button className='bg-[#5E6472] text-white w-2/6 self-end m-3'>Ver mas</button>
        </div>
    </section>
  )
}

export default AboutHome