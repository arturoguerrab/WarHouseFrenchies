// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useRef, useState } from 'react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { containerClass } from '../../../utils/ClassRepeated';

const SliderHome = () => {
  return (
    <div className='w-screen h-[400px] bg-[#ffffff] relative z-10 '>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={containerClass + 'h-[400px]'}
      >
        <SwiperSlide className='slider'> </SwiperSlide>
        <SwiperSlide className='slider' >Slide 2</SwiperSlide>
        <SwiperSlide className='slider'>Slide 3</SwiperSlide>
        <SwiperSlide className='slider'>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderHome