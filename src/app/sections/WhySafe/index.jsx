import React, {useState} from 'react';
import classnames from "classnames";
import Lottie from "react-lottie";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";

import 'swiper/swiper-bundle.min.css'

import Divider from "../../components/Divider";
import Wrapper from "../../components/Wrapper";

import {slides} from "./helper"
import style from "./style.module.scss";
import arrow from '../../assets/svg/arrow.svg';

SwiperCore.use([Navigation, Pagination]);

const WhySafe = () => {

    return (
        <Wrapper id="safe" extraClassName={style.mainWrapper}>
            <div className={classnames(style.arrow, "nextEl")}>
                <img src={arrow} alt=""/>
            </div>
            <div className={classnames(style.arrow, style.arrowPrev, "prevEl")}>
                <img src={arrow} alt=""/>
            </div>
            <Swiper
                navigation={{
                    nextEl: ".nextEl",
                    prevEl: ".prevEl"
                }}
                pagination={false}
                slidesPerView={1}
                loopFillGroupWithBlank={true}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                    1000: {
                        slidesPerView: 2,
                        centeredSlides: false,
                        spaceBetween: 70,
                    },
                }}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide
                        className={style.slide}
                        key={`${slide.title}_${i}`}
                    >
                        <div className={style.lottieWrapper}>
                            <Lottie options={slide.lottieOption}/>
                        </div>
                        <div className="text text--big">
                            {slide.title}
                        </div>
                        <Divider width="small" extraClassName={style.divider}/>
                        <div className={classnames(style.contentText, "text text--middle")}>
                            {slide.content}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};

export default WhySafe;