import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import useWindowSize from 'hooks/windowSize';
import JanSVG from 'components/handwrites/jan';
import AncutaSVG from 'components/handwrites/ancuta';
import YearsSVG from 'components/handwrites/years';
import FullNameSVG from 'components/handwrites/fullName';

export default function App() {
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
        <div className='swiper-back'></div>

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
            spaceBetween={height/2}
          >
            <SwiperSlide style={{height: "30vh"}} className='first-slide'>
                <span className='svg1' style={{
                    // transform: `translateX(calc(-50% - (${progress} / 0.01) * 50%))`,
                }}>
                    <FullNameSVG/>
                </span>
                <div style={{height: "30vh", backgroundColor: 'transparent'}}>

                </div>
            </SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
          </Swiper>
        </SwiperSlide>
      <style>
        {`
#app {
  height: 100vh;
}
html,
body {
  position: relative;
  height: 100vh;
}

.svg1{
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
}

.svg1 > svg{
    flex: 1
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100vh;
  height: 100vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-back{
position: fixed;
width: 100vw;
height: 100vh;

  background: url('/sunset.jpg') no-repeat center center;
  background-size: contain;
  background-origin: content-box;
  padding: 0 20vw;
}

.swiper-v{
//   background: url('/sunset.jpg') no-repeat center center;
  background-size: cover;
  background-origin: content-box;
  padding: 0 2em;
}

.svg-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.svg1, .svg2 {
  position: absolute;
  transition: transform 0.3s;
}

.svg1 {
  left: 50%;
  transform: translateX(-50%);
}

.svg2 {
  right: 50%;
  transform: translateX(50%);
}

        `}
      </style>
    
        </div>
  );
}
