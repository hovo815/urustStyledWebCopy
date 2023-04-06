import React from 'react';
import Flex from "../Flex/Flex";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Images from "../Images/Images";
import {useWindowSize} from "../../../Hooks/useWindowSize";


const SwiperSlider = ({data}) => {
    const [width] = useWindowSize()
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={5}
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
                    spaceBetween: 1
                },
                479: {
                    slidesPerView: 1,
                    spaceBetween: 1
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 5
                },
                991:{
                    slidesPerView: 2,
                    spaceBetween: 5
                },
            }}
        >
            {data.map(item => (
                <SwiperSlide key={item}>
                    <Flex height="100%" width="100%">
                        <Images  width={width <= 992 ? "100%" : "285px" } maxWidth="100%" src={item} alt="action card logo"/>
                    </Flex>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};


export default SwiperSlider;