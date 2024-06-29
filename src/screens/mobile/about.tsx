import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'styles/swiper.css'

// import required modules
import { Pagination } from 'swiper/modules';
import useWindowSize from 'hooks/windowSize';
import JanSVG from 'components/handwrites/jan';
import AncutaSVG from 'components/handwrites/ancuta';
import YearsSVG from 'components/handwrites/years';
import FullNameSVG from 'components/handwrites/fullName';
import AnimatedBox from 'components/animations/animatedBox';
import AboutMeContent, { AboutMeContentMobileOne, AboutMeContentMobileTwo } from 'components/contents/about';

export default function AboutMobile() {
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
                {/* transform: `translateX(calc(-50% - (${progress} / 0.01) * 50%))`, */}
              <AnimatedBox className='svg1'>
                    <FullNameSVG/>
              </AnimatedBox>
            </SwiperSlide>
            <SwiperSlide style={{height: 'auto', overflowY: 'scroll', paddingTop: "3em"}} >
              <AboutMeContentMobileOne/>
            </SwiperSlide>

            <SwiperSlide style={{height: 'auto', overflowY: 'scroll', paddingTop: "3em"}} >
              <AboutMeContentMobileTwo/>
            </SwiperSlide>
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

function TextContent(){
  return (
    <AnimatedBox style={{height: '100%', paddingBottom: '30px'}}>

  <span style={{paddingTop: '30px', textAlign: 'center', justifyContent: 'center', paddingBottom: '30px'}}>
    <AboutMeContent/>
  </span>
    </AnimatedBox>
  );
}
