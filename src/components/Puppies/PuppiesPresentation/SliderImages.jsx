import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import { DevBoxDesing } from '../../../utils/ClassRepeated';

const SliderImages = () => {
  return (
    <>
        <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
                shadow: false,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className={"w-full lg:w-5/12 m-5"}
        >
            <SwiperSlide>
                <img className='w-full' src="https://res.cloudinary.com/dbwomkmnq/image/upload/v1696362182/WarHouse%20Frenchies/Mask_group_1_qxelaz.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full' src="https://res.cloudinary.com/dbwomkmnq/image/upload/v1696362181/WarHouse%20Frenchies/Mask_group_2_uvytvp.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full' src="https://res.cloudinary.com/dbwomkmnq/image/upload/v1696362182/WarHouse%20Frenchies/Mask_group_1_qxelaz.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full' src="https://res.cloudinary.com/dbwomkmnq/image/upload/v1696362181/WarHouse%20Frenchies/Mask_group_2_uvytvp.png" />
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default SliderImages