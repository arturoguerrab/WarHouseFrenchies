import React from 'react'
import { DevBoxDesing, containerClass } from '../../../utils/ClassRepeated'
import SliderImages from './SliderImages'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

const PuppiesPresentation = ({side,sex}) => {
    if (side === 1) {
        return (
                <article className={containerClass + 'flex flex-col lg:flex-row justify-evenly items-center py-10'}>
                    <SliderImages/>
                    <div className='w-11/12 lg:w-5/12'>
                        <div className='flex justify-start'>
                            {sex == 'male' 
                                ?<h3 className='text-6xl font-semibold text-complement'>Charlie</h3>
                                :<h3 className='text-6xl font-semibold text-secondary'>Albina</h3>
                            }
                            {sex == 'male' 
                                ?<MaleIcon className='text-primary' sx={{fontSize:60}}/> 
                                :<FemaleIcon sx={{fontSize:60}} className='text-acent'/>
                            }
                        </div>
                        <p className='text-3xl font-semibold'>3 months</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus hic sunt reiciendis aliquid neque, enim temporibus nemo aspernatur est officiis pariatur, eaque amet adipisci sed id nostrum omnis laudantium placeat!</p>
                    </div>
                </article>
        )
    }
    
    return(
        <article className={containerClass + 'flex flex-col lg:flex-row-reverse justify-evenly items-center py-10'}>
            <SliderImages/>
            <div className='w-11/12 lg:w-5/12'>
                <div className='flex justify-start'>
                    {sex == 'male' 
                        ?<h3 className='text-6xl font-semibold text-complement'>Charlie</h3>
                        :<h3 className='text-6xl font-semibold text-secondary'>Albina</h3>
                    }
                    {sex == 'male' 
                        ?<MaleIcon className='text-primary' sx={{fontSize:60}}/> 
                        :<FemaleIcon sx={{fontSize:60}} className='text-acent'/>
                    }
                </div>
                <p className='text-3xl font-semibold'>3 months</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus hic sunt reiciendis aliquid neque, enim temporibus nemo aspernatur est officiis pariatur, eaque amet adipisci sed id nostrum omnis laudantium placeat!</p>
            </div>
        </article>
    )
}

export default PuppiesPresentation