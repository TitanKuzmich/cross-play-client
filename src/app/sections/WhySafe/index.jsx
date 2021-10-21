import React from 'react';
import classnames from "classnames";
import Lottie from "react-lottie";
import {Navigation, Pagination, Swiper} from "swiper";
import SwiperCore from "swiper";
import {SwiperSlide} from "swiper/cjs/swiper-react";

import "swiper/swiper.min.css";

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
                slidesPerView={2}
                loopFillGroupWithBlank={true}
                spaceBetween={70}
                // loop={true}
                // centeredSlides={true}
                pagination={{
                    "clickable": true
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
                        <div className="text text--middle">
                            {slide.content}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};

export default WhySafe;