import React, { ReactNode, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'styles/swiper.css'

// import required modules
import useWindowSize from 'hooks/windowSize';
import FullNameSVG from 'components/handwrites/fullName';
import AnimatedBox from 'components/animations/animatedBox';
import { AboutMeContentMobileOne, AboutMeContentMobileTwo } from 'components/contents/about';
import AText from 'components/animations/animatedText';
import AchievedSVG from 'components/handwrites/achieved';
import { AchievedText } from 'components/contents/achieved';
import { TodayText } from 'components/contents/today';

export default function TodayMobile() {
  const [progress, setProgress] = useState(0);
  const {size: {height}} = useWindowSize();
  const swiperRef = useRef(null);

  const handleSwiper = (swiper: any) => {
    setProgress(swiper.progress);
    console.log(swiper.progress);
  };
  return (
      <div className='swiper-background'>
        <SwiperSlide>
        <AnimatedBox className='swiper-back'><></></AnimatedBox>

          <Swiper
            mousewheel={true}
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            slidesPerView="auto"
            speed={500}
            onSwiper={(swiper: any) => {
                swiperRef.current = swiper;
                swiper.on('progress', handleSwiper);
            }}
            spaceBetween={height/2.5}
          >
            <SwiperSlide style={{height: "30vh"}} className='first-slide'>
              <AnimatedBox className='svg1'>
                    <AchievedSVG/>
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