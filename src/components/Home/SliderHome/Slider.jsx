import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Card from './Card';
import { DevBoxDesing } from '../../../utils/ClassRepeated';
import 'swiper/css';
import 'swiper/css/pagination';


const Slider = () => {
    return (
    <>
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
        clickable: true,
        }}
        breakpoints={{
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
        2100: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
        }}
        modules={[Pagination]}
        className={"bg-white w-full h-[450px] p-10 m-10"}
    >
        <SwiperSlide>
            <Card name={'Pepe'} sex={'male'} description={'lorem ipsun dolor arsec lorem ispun'} img={"https://res.cloudinary.com/dbwomkmnq/image/upload/v1696356613/WarHouse%20Frenchies/fernando-jorge-2dtCoIe0DKM-unsplash_2_lg3gt7.png"} bg={'bg-[url("https://res.cloudinary.com/dbwomkmnq/image/upload/v1696356766/WarHouse%20Frenchies/Vector_ia3aic.png")] bg-contain bg-no-repeat '}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card name={'albina'} description={'lorem ipsun dolor arsec lorem ispun'} img={"https://res.cloudinary.com/dbwomkmnq/image/upload/v1696356614/WarHouse%20Frenchies/may-gauthier-eLDpa__e4io-unsplash_2_oj9mhe.png"} bg={'bg-[url("https://res.cloudinary.com/dbwomkmnq/image/upload/v1696356766/WarHouse%20Frenchies/Vector_ia3aic.png")] bg-contain bg-no-repeat '}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card name={'cacique'} sex={'male'} description={'lorem ipsun dolor arsec lorem ispun'} img={"https://res.cloudinary.com/dbwomkmnq/image/upload/v1696356614/WarHouse%20Frenchies/razas-perros-bulldog-frances-lunares-blancos-negros-sobre-marmol_4_h99s7m.png"} bg={'bg-[url("https://res.cloudinary.com/dbwomkmnq/image/upload/v1696356766/WarHouse%20Frenchies/Vector_ia3aic.png")] bg-contain bg-no-repeat '}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card name={'lola'}  description={'lorem ipsun dolor arsec lorem ispun'} img={"https://res.cloudinary.com/dbwomkmnq/image/upload/v1696356613/WarHouse%20Frenchies/fernando-jorge-2dtCoIe0DKM-unsplash_2_lg3gt7.png"} bg={'bg-[url("https://res.cloudinary.com/dbwomkmnq/image/upload/v1696356766/WarHouse%20Frenchies/Vector_ia3aic.png")] bg-contain bg-no-repeat '}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card name={'spike'} sex={'male'}  description={'lorem ipsun dolor arsec lorem ispun'} img={"https://res.cloudinary.com/dbwomkmnq/image/upload/v1696356614/WarHouse%20Frenchies/may-gauthier-eLDpa__e4io-unsplash_2_oj9mhe.png"} bg={'bg-[url("https://res.cloudinary.com/dbwomkmnq/image/upload/v1696356766/WarHouse%20Frenchies/Vector_ia3aic.png")] bg-contain bg-no-repeat '}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card name={'luna'}  description={'lorem ipsun dolor arsec lorem ispun'} img={"https://res.cloudinary.com/dbwomkmnq/image/upload/v1696356614/WarHouse%20Frenchies/razas-perros-bulldog-frances-lunares-blancos-negros-sobre-marmol_4_h99s7m.png"} bg={'bg-[url("https://res.cloudinary.com/dbwomkmnq/image/upload/v1696356766/WarHouse%20Frenchies/Vector_ia3aic.png")] bg-contain bg-no-repeat '}/>
        </SwiperSlide>
        
    </Swiper>
    </>
    )
}

export default Slider