import React from 'react'
import {containerClass } from '../../../utils/ClassRepeated'
import SliderImages from './SliderImages'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

const PuppiesPresentation = ({puppies}) => {
    return (
        puppies.map((element)=>{
            if (puppies.indexOf(element)%2 === 0){
                return(
                    <article className={containerClass + 'flex flex-col lg:flex-row justify-evenly items-center py-10'} key={element.id}>
                        <SliderImages thumbnails={element.thumbnails}/>
                        <div className='w-11/12 lg:w-5/12'>
                            <div className='flex justify-start'>
                                {element.gender == 'male' 
                                    ?<h3 className='text-6xl font-semibold text-complement'>{element.name}</h3>
                                    :<h3 className='text-6xl font-semibold text-secondary'>{element.name}</h3>
                                }
                                {element.gender == 'male' 
                                    ?<MaleIcon className='text-primary' sx={{fontSize:60}}/> 
                                    :<FemaleIcon sx={{fontSize:60}} className='text-acent'/>
                                }
                            </div>
                            <p className='text-3xl font-semibold'>{element.age + ' months'}</p>
                            <p>{element.description}</p>
                        </div>
                    </article>
                )
            }else{
                return(
                    <article className={containerClass + 'flex flex-col lg:flex-row-reverse justify-evenly items-center py-10'} key={element.id}>
                        <SliderImages thumbnails={element.thumbnails}/>
                        <div className='w-11/12 lg:w-5/12'>
                            <div className='flex justify-start'>
                                {element.gender == 'male' 
                                    ?<h3 className='text-6xl font-semibold text-complement'>{element.name}</h3>
                                    :<h3 className='text-6xl font-semibold text-secondary'>{element.name}</h3>
                                }
                                {element.gender == 'male' 
                                    ?<MaleIcon className='text-primary' sx={{fontSize:60}}/> 
                                    :<FemaleIcon sx={{fontSize:60}} className='text-acent'/>
                                }
                            </div>
                            <p className='text-3xl font-semibold'>{element.age + ' months'}</p>
                            <p>{element.description}</p>
                        </div>
                    </article>
                )
            }
        })
    )
}

export default PuppiesPresentation