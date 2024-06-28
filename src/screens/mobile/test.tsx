import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  const handleSwiper = (swiper: any) => {
    setProgress(swiper.progress);
    console.log(swiper.progress);
  };
  return (
    <div className='swiper-background'>
        <SwiperSlide>
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
            spaceBetween={50}
          >
            <SwiperSlide style={{height: "30vh"}} className='first-slide'>
                <span className='svg1' style={{
                    transform: `translateX(calc(-50% - (${progress} / 0.01) * 50%))`,
                }}>
                    some label
                </span>
                <div style={{height: "30vh", backgroundColor: 'transparent'}}>

                </div>
            </SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
            <SwiperSlide>Vertical Slide 3</SwiperSlide>
            <SwiperSlide>Vertical Slide 4</SwiperSlide>
            <SwiperSlide>Vertical Slide 5</SwiperSlide>
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

.swiper-v{
  background: url('/peak.jpg') no-repeat center center;
  background-size: cover;
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
