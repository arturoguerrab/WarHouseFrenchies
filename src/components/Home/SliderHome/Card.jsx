import React from 'react'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { DevBoxDesing } from '../../../utils/ClassRepeated';
import './slider.css'

const Card = ({name, description, img, sex, bg}) => {
  return (
    <div className={bg + `h-full w-full flex flex-col justify-center items-center bg-center p-8 slider slidera md:p-16 lg:p-10`}>
        <img className='h-[150px] w-[150px] rounded-3xl' src={img} alt="" />
        <div className='place-self-start flex items-center'>
            <h3 className='text-2xl font-semibold'>{name}</h3>
            {sex == 'male' ?<MaleIcon className='text-complement'/> :<FemaleIcon className='text-secondary'/>}
        </div>
        <p className='font-medium'>{description}</p>
    </div>
  )
}

export default Card