import React from 'react';
import Flex from "../Flex/Flex";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Images from "../Images/Images";

const SwiperSlider = ({data}) => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={false}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                479: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                991:{
                    slidesPerView: 4,
                    spaceBetween: 30
                },
            }}
        >
            {data.map(item => (
                <SwiperSlide key={item}>
                            <Flex height="100%" width="100%">
                                <Images  width="100%" src={item} alt="action card logo"/>
                            </Flex>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};


export default SwiperSlider;