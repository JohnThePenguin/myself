import React, { useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
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
import { SectionsTexts } from 'components/contents/experience';
import BackToHome from 'components/backToHome';
import ArrowForwardSVG from 'components/handwrites/arrowForward';

const ForwardButton = () => {
  const swiper = useSwiper();

  return (
    <div className='svg-height' onClick={() => swiper.slideNext()}>
      <ArrowForwardSVG/>
    </div>
  )
};

export default function ExperienceMobile() {
  const {size: {height}} = useWindowSize();
  const swiperRef = useRef(null);

  return (
      <div className='swiper-background'>
        <BackToHome/>
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
                            <img src={content.image} style={{maxHeight: "30vh", aspectRatio: 0.77, width: 'auto'}}/>
                            <AText style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                              <p>{content.title}</p>
                              <ForwardButton/>
                            </AText>
                        </SwiperSlide>

                        <SwiperSlide className='h-full w-full p-2 project-desc-page'>
                            {content.content.map((text, index)=>
                                <AText d={(index + 3)/10} style={{fontSize: '2vh'}}>{text}</AText>
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