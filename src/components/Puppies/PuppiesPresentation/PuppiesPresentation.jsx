import React from 'react'
import { DevBoxDesing, containerClass } from '../../../utils/ClassRepeated'

const PuppiesPresentation = ({side}) => {
    if (side === 1) {
        return (
            // <div className={DevBoxDesing + 'w-screen bg-[#ffffff]'}>
                <article className={containerClass + DevBoxDesing + 'lg:flex lg:justify-center lg:items-center p-[30px]'}>
                    <img className='w-[350px] h-[350px]' src="https://images.squarespace-cdn.com/content/v1/593e0bb0e58c62c93bd2aa8f/1639937217965-7I8FI9DFF02Q0FFK6N4I/b2d34a28-7a55-42b7-a51c-e58bec1facfa.jpg?format=1500w" alt="" />
                    <div className='w-[350px]'>
                        <h2 className='text-2xl'>Charlie</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus hic sunt reiciendis aliquid neque, enim temporibus nemo aspernatur est officiis pariatur, eaque amet adipisci sed id nostrum omnis laudantium placeat!</p>
                    </div>

                </article>
            // </div>
        )
    }
    
    return(
        <article className={containerClass + DevBoxDesing + 'flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center pt-[60px]'}>
        <div className='w-[350px]'>
            <h2 className='text-2xl'>Lulu</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus hic sunt reiciendis aliquid neque, enim temporibus nemo aspernatur est officiis pariatur, eaque amet adipisci sed id nostrum omnis laudantium placeat!</p>
        </div>
        <img className='w-[350px] h-[350px]' src="https://frenchiegiants.com/wp-content/uploads/2023/04/1680336002165-1024x994.jpg" alt="" />

    </article>
    )
}

export default PuppiesPresentation