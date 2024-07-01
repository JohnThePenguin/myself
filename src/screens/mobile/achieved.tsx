import React, { ReactNode, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

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
import BackToHome from 'components/backToHome';
import ArrowDownSVG from 'components/handwrites/arrowDown';

export const NextButton = ({hide} : {hide? : boolean}) => {
  const swiper = useSwiper();

  return (
    <div 
      className="mobile-swiper-next"
      style={{opacity: `${hide ? 0 : 1}`}}
      onClick={() => swiper.slideNext()}>
      <ArrowDownSVG/>
    </div>
  )
};

export default function AchievedMobile() {
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
            speed={1000}
            spaceBetween={height/2.5}
            onSlideChange={(swiper: any) => {setActiveIndex(swiper.activeIndex)}}
          >
            <NextButton hide={activeIndex == AchievedText.length}/>

            <SwiperSlide style={{height: "30vh"}} className='first-slide'>
              <AnimatedBox className='svg1'>
                    <AchievedSVG/>
              </AnimatedBox>
            </SwiperSlide>

            {AchievedText.map((text, index) =>
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