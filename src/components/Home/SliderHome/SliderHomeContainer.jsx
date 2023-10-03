import React from 'react';
import Slider from './Slider';
import { containerClass } from '../../../utils/ClassRepeated';

const SliderHomeContainer = () => {
  return (
    <div className={containerClass + 'bg-white relative z-10 flex flex-col justify-center items-center'}>
      <h2 className=' text-left text-3xl md:text-6xl lg:place-self-start lg:ml-12 font-bold text-secondary'>Meet our<br/><span className='text-black ml-6 lg:ml-20'>mommies & daddies</span></h2>
      <Slider/>
    </div>
  );
}

export default SliderHomeContainer