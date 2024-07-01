import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'styles/swiper.css'

// import required modules
import useWindowSize from 'hooks/windowSize';
import AnimatedBox from 'components/animations/animatedBox';
import AText from 'components/animations/animatedText';
import { TodayText } from 'components/contents/today';
import TodaySVG from 'components/handwrites/today';
import BackToHome from 'components/backToHome';
import { NextButton } from './achieved';

export default function TodayMobile() {
  const {size: {height}} = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
      <div className='swiper-background'>
        <BackToHome/>
        <SwiperSlide>
        <AnimatedBox className='swiper-back'><></></AnimatedBox>

          <Swiper
            mousewheel={true}
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            slidesPerView="auto"
            speed={500}
            spaceBetween={height/2.5}
            onSlideChange={(swiper: any) => {setActiveIndex(swiper.activeIndex)}}
          >
            <NextButton hide={activeIndex == TodayText.length} />
            <SwiperSlide style={{height: "30vh"}} className='first-slide'>
              <AnimatedBox className='svg1'>
                    <TodaySVG/>
              </AnimatedBox>
            </SwiperSlide>

            {TodayText.map((text, index) =>
                <SwiperSlide style={{height: "80vh"}} className=''>
                    <AText d={0}>{text}</AText>
                </SwiperSlide>
            )}
          </Swiper>
        </SwiperSlide>
      <style>{`
        .swiper-back{
          background: url('/sunset.jpg') no-repeat center center;
          background-size: contain;
          background-origin: content-box;
        }
      `}</style>
      </div>
  );
}