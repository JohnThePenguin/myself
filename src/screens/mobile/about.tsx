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
              <TextContent/>
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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum esse aperiam dolorem consectetur mollitia commodi reprehenderit vel ipsam, impedit qui exercitationem, molestias omnis ipsum repellat quo dolores, praesentium tempora molestiae vero. Voluptatem sed commodi nisi minus explicabo modi? Voluptates quia fugit libero voluptatem dignissimos in dolorum at eligendi accusantium ad harum eos sit reprehenderit, eum, error vero voluptate iure dicta? Consectetur nemo illum molestiae, natus nesciunt eius eveniet minus accusamus quia rerum repellat. Sunt quo maiores similique cumque rerum, a deserunt necessitatibus eveniet aut voluptatem. Voluptatibus, nam amet perferendis officia quo repudiandae asperiores eum vel harum eius in assumenda iste aperiam adipisci accusantium placeat tenetur. Ad id vero voluptatum recusandae, magni totam distinctio laboriosam excepturi mollitia modi nesciunt! Nihil optio commodi modi exercitationem, minima facilis maiores cum, eius vitae veniam rerum nam provident aliquam dolores nemo libero aut, reiciendis error cumque ullam nisi? Illum quo suscipit atque quis asperiores aperiam, facere expedita saepe amet, sunt, quasi quaerat possimus! Atque deleniti architecto aut quasi nihil, laborum quod rem explicabo iusto error similique quia culpa earum quae fuga commodi blanditiis voluptatum numquam autem dolores nemo quo ducimus fugiat. Similique perferendis id, minima quas laudantium ut? Praesentium ullam excepturi quod numquam illum?
  </span>
    </AnimatedBox>
  );
}
