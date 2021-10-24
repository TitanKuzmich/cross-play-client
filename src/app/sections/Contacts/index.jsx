import React, { useState} from 'react';
import classnames from "classnames";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";

import style from "./style.module.scss";
import 'swiper/swiper-bundle.min.css'

import Divider from "../../components/Divider";
import Wrapper from "../../components/Wrapper";

import arrow from '../../assets/svg/arrow.svg';
import {slides} from "./helper";

SwiperCore.use([Navigation, Pagination]);

const Contacts = () => {

    const [activeSlide, setActiveSlide] = useState(0);
    const [isAnimated, setAnimated] = useState(false);

    const animateSocials = (swiperCore) => {
        setAnimated(true);
        const {
            realIndex
        } = swiperCore;

        const activeIndex = realIndex === slides.length ? 0 : realIndex
        setTimeout(() => {
            setActiveSlide(activeIndex);
            setAnimated(false);
        }, 500)
    }

    const renderSocials = (i) => {

        return (
            <div id="transfer" className={classnames(style.leftSideContent, {[style.leftSideContentAnimated]: isAnimated})}>
                {
                    slides[activeSlide].socials.map((network) => (
                        <div className={style.socialWrapper} key={`${network.title}_${i}`}>
                            <div className={style.iconWrapper}>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={network.link}
                                    className="text"
                                >
                                    <span className={classnames(style.icon, {
                                        [style.iconVk]: network.icon === "vk",
                                        [style.iconInst]: network.icon === "inst",
                                        [style.iconTg]: network.icon === "tg",
                                        [style.iconGh]: network.icon === "gh"
                                    })}/>
                                </a>
                            </div>

                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={network.link}
                                className="text text--small disappearOnTablet"
                            >
                                {network.title}
                            </a>
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <Wrapper extraClassName={style.mainWrapper}>
            <div className={style.socialSideWrapper}>
                {renderSocials(activeSlide)}
            </div>

            <div className={style.rightSideContent}>
                <div className={classnames(style.arrow, "nextEl")}>
                    <img src={arrow} alt="next slide"/>
                </div>
                <Swiper
                    navigation={{
                        nextEl: ".nextEl"
                    }}
                    pagination={false}
                    speed={1000}
                    spaceBetween={50}
                    slidesPerView={1}
                    loopFillGroupWithBlank={true}
                    centeredSlides={true}
                    loop={true}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                    }}
                    onSlideChange={animateSocials}
                >
                    {slides.map((slide, i) => (
                        <SwiperSlide
                            className={style.slide}
                            key={`${slide.title}_${i}`}
                        >
                            <div className={style.leftSide}>
                                <img src={slide.image} alt="founder avatar"/>
                            </div>
                            <div className={style.rightSide}>
                                <div className="text text--big">
                                    {slide.title}
                                </div>

                                <Divider width="medium" extraClassName={style.divider}/>

                                <div className="text text--small">
                                    {slide.subtitle}
                                </div>

                                <Divider width="small" extraClassName={style.divider}/>

                                <div className={classnames(style.contentText, "text text--middle")}>
                                    {slide.content}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Wrapper>
    );
};

export default Contacts;