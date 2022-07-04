import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/css';

const slideContent = [
    {
        text: 'Ownership Works Launches Movement to Help Create $20 Billion in Wealth for Working Families',
        date: 'APR.05.2022'
    },
    {
        text: 'Ownership Works Launches Movement to Help Create $20 Billion in Wealth for Working Families',
        date: 'APR.05.2022'
    },
    {
        text: 'jose alberto perez',
        date: 'APR.05.2022'
    },
    {
        text: 'jose alberto perez',
        date: 'APR.05.2022'
    },
    {
        text: 'Ownership Works Launches Movement to Help Create $20 Billion in Wealth for Working Families',
        date: 'APR.05.2022'
    },
    {
        text: 'Ownership Works Launches Movement to Help Create $20 Billion in Wealth for Working Families',
        date: 'APR.05.2022'
    },
    {
        text: 'Ownership Works Launches Movement to Help Create $20 Billion in Wealth for Working jose alberto perez',
        date: 'APR.05.2022'
    },
    {
        text: 'Ownership Works Launches Movement to Help Create $20 Billion in Wealth for Working Families',
        date: 'APR.05.2022'
    }
];

SwiperCore.use([Navigation]);

const Slider = ({ slides, delay, content }) => {
    return (
        <>
            <div className="h-[192px]">
                <div className="text-[64px] pl-[25.5%] text-left mt-[96px]">
                    Latest News
                </div>
            </div>
            <section className="pl-[24%]">
                <div className="xl:w-[auto]">
                    <div className="relative flex items-center md:px-[38px]">
                        {/* Left Arrow */}
                        <div className="button-prev absolute translate-x-[-100%] left-[24px] xl:left-[-24px] hidden md:block w-[31.42px] h-[63.42px] cursor-pointer">
                            <a className="text-base text-black btn--primary btn--primary-hover group group flex items-center mt-8 ">
                                <i className="icon--right">
                                    <svg
                                        width="13"
                                        height="12"
                                        viewBox="0 0 13 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transition-all duration-300 delay-150 inline"
                                    >
                                        <path
                                            className="transition-all duration-300   arrow "
                                            d="M6 1L11 6L6 11"
                                            stroke="#1E1E1E"
                                            stroke-width="2"
                                        ></path>
                                        <path
                                            className="transition-all duration-300  arrow-line"
                                            d="M11 6L0 6"
                                            stroke="#1E1E1E"
                                            stroke-width="2"
                                        ></path>
                                    </svg>
                                </i>
                            </a>
                        </div>

                        {/* Slider */}
                        <Swiper
                            slidesPerView="2"
                            spaceBetween={75}
                            className=""
                            modules={[Navigation]}
                            loop={false}
                            navigation={{
                                nextEl: '.button-next',
                                prevEl: '.button-prev'
                            }}
                            breakpoints={{
                                // when window width is >= 640px
                                0: {
                                    width: 0,
                                    slidesPerView: 1
                                },
                                640: {
                                    width: 640,
                                    slidesPerView: 1
                                },
                                // when window width is >= 768px
                                768: {
                                    width: 768,
                                    slidesPerView: 2
                                }
                            }}
                        >
                            {slideContent.map((slide, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="group h-[514px] w-[384px] bg-gray-2 rounded-10 p-[48px] text-black font-tpg text-left font-normal flex flex-col  hover:bg-royal-1 hover:text-white transition-all duration-500">
                                        <div className="grid grid-cols-4 border border-gray-3   border-r-0 border-t-0 border-l-0 h-[75px]">
                                            <div className="h-[40px] w-[40px] bg-gray-1" />
                                            <h2 className="text-[16px] leading-[48px] col-span-2 ">
                                                Press Release
                                            </h2>
                                        </div>
                                        <p className="text-[26px] leading-[30px] mt-[40px]">
                                            {slide.text}
                                        </p>
                                        <p className="text-[12px] leading-[30px] text-gray-4 mt-[30px] group-hover:text-white  transition-all duration-500">
                                            {slide.date}
                                        </p>
                                        <a className="text-base text-black btn--primary btn--primary-hover group group flex items-center mt-8  group-hover:text-white">
                                            <i className="icon--left origin-left duration-300 group-hover:scale-125 scale-100 trasnform transition-all">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    className="transition-all duration-300 inline"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg "
                                                >
                                                    <circle
                                                        cx="8"
                                                        cy="8"
                                                        r="6"
                                                        stroke-width="2"
                                                        stroke="#0055FF"
                                                        fill="#0055FF"
                                                    ></circle>
                                                </svg>
                                            </i>
                                            <span className="group-hover:translate-x-1 transition-all duration-300 block  max-w-[198px] !leading-24 !font-normal mx-4">
                                                View More
                                            </span>
                                            <i className="icon--right">
                                                <svg
                                                    width="13"
                                                    height="12"
                                                    viewBox="0 0 13 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="transition-all duration-300 delay-150 inline"
                                                >
                                                    <path
                                                        className="transition-all duration-300   arrow "
                                                        d="M6 1L11 6L6 11"
                                                        stroke="#1E1E1E"
                                                        stroke-width="2"
                                                    ></path>
                                                    <path
                                                        className="transition-all duration-300  arrow-line"
                                                        d="M11 6L0 6"
                                                        stroke="#1E1E1E"
                                                        stroke-width="2"
                                                    ></path>
                                                </svg>
                                            </i>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Right Arrow */}
                        <div className="button-next absolute right-[24px] xl:right-[400px] translate-x-[100%] hidden md:block w-[31.42px] h-[63.42px] cursor-pointer z-50">
                            <a className="text-base text-black btn--primary btn--primary-hover group group flex items-center mt-8 ">
                                <i className="icon--right">
                                    <svg
                                        width="13"
                                        height="12"
                                        viewBox="0 0 13 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transition-all duration-300 delay-150 inline"
                                    >
                                        <path
                                            className="transition-all duration-300   arrow "
                                            d="M6 1L11 6L6 11"
                                            stroke="#1E1E1E"
                                            stroke-width="2"
                                        ></path>
                                        <path
                                            className="transition-all duration-300  arrow-line"
                                            d="M11 6L0 6"
                                            stroke="#1E1E1E"
                                            stroke-width="2"
                                        ></path>
                                    </svg>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Slider;
