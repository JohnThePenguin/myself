import React, { ReactNode, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'styles/swiper.css';
import 'styles/swiper-experience.css';

// import required modules
import useWindowSize from 'hooks/windowSize';
import AnimatedBox from 'components/animations/animatedBox';
import AText from 'components/animations/animatedText';
import AchievedSVG from 'components/handwrites/achieved';
import ExperienceContent, { SectionsTexts } from 'components/contents/experience';

export default function TodayMobile() {
  const {size: {height}} = useWindowSize();
  const swiperRef = useRef(null);

  return (
      <div className='swiper-background'>
        <div className="swiper-container">
        <AnimatedBox className='swiper-back'><></></AnimatedBox>

          <Swiper
            mousewheel={true}
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            slidesPerView={1.2}
            speed={300}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
          >
            {SectionsTexts.map((content, index) =>
                <SwiperSlide key={index}>
                    <Swiper
                        className='mySwiper2 swiper-h h-full w-full'
                        direction={'horizontal'}
                        spaceBetween={30}
                        slidesPerView={1}
                    >
                        <SwiperSlide className='h-full w-full p-2 project-title-page'>
                            <img src={content.image} style={{maxHeight: "50vh"}}/>
                            <AText>{content.title}</AText>
                        </SwiperSlide>

                        <SwiperSlide className='h-full w-full p-2 project-desc-page'>
                            {content.content.map((text)=>
                                <AText style={{fontSize: '2vh'}}>{text}</AText>
                            )}
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
  );
}