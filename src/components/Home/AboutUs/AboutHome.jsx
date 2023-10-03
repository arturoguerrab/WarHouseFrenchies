import React from 'react'
import { DevBoxDesing, containerClass } from '../../../utils/ClassRepeated'
import Values from './Values'
import Btn from '../../Samples/Btn'


const AboutHome = () => {
  return (
    <section className={containerClass + 'bg-white relative z-10 flex flex-col md:flex-row justify-evenly items-center gap-4 mt-[-2px] py-24'}>
        <img className='w-9/12 md:w-5/12' src="https://res.cloudinary.com/dbwomkmnq/image/upload/v1696358129/WarHouse%20Frenchies/Mask_group_naujny.png" alt="" />
        <div className={'flex flex-col items-center gap-3 lg:w-8/12'}>
            <h2 className='text-3xl md:text-6xl font-bold text-secondary'>The Love<br/><span className='text-black ml-6 lg:ml-20'>& the care</span></h2>
            <p className='p-4 w-4/5'>Lorem ipsum, adipisicing elit. Lorem ipsum, adipisicing elit. Maxime veniam, molestiae assumenda qui veritatis iusto laudantium quisquam eum autem numquam!</p>
            <div className={'flex w-[300px] justify-between'}>
              <Values name={'Value'} src={"https://res.cloudinary.com/dbwomkmnq/image/upload/v1696367784/WarHouse%20Frenchies/Vector_1_rntrth.png"}/>
              <Values name={'Value'} src={"https://res.cloudinary.com/dbwomkmnq/image/upload/v1696367785/WarHouse%20Frenchies/Group_gq1pxo.png"}/>
              <Values name={'Value'} src={"https://res.cloudinary.com/dbwomkmnq/image/upload/v1696367784/WarHouse%20Frenchies/Vector_2_x5bqmw.png"}/>
            </div>
            <Btn style={'w-[180px] h-[40px]'} text={'Meet us'} to={'/about'}/>
        </div>
    </section>
  )
}

export default AboutHome