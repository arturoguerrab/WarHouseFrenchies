import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

const SliderImages = ({thumbnails}) => {
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
            {
                thumbnails.map((element)=>{
                    return(
                        <SwiperSlide key={thumbnails.indexOf(element)}>
                            <img className='w-full' src={element} />
                        </SwiperSlide>
                    )
                })
            }   
            </Swiper>
        </>
    )
}

export default SliderImages