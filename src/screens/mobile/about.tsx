import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import useWindowSize from "hooks/windowSize";
import JanSVG from "components/handwrites/jan";
import AncutaSVG from "components/handwrites/ancuta";
import YearsSVG from "components/handwrites/years";
import FullNameSVG from "components/handwrites/fullName";

export default function App() {
    const [progress, setProgress] = useState(0);
    const {
        size: { height },
    } = useWindowSize();
    const swiperRef = useRef(null);

    const handleSwiper = (swiper: any) => {
        setProgress(swiper.progress);
        console.log(swiper.progress);
    };
    return (
        <div className="swiper-background">
            <SwiperSlide>
                <div className="swiper-back"></div>

                <Swiper
                    mousewheel={true}
                    className="mySwiper2 swiper-v"
                    direction={"vertical"}
                    slidesPerView="auto"
                    speed={500}
                    onSwiper={(swiper: any) => {
                        swiperRef.current = swiper;
                        swiper.on("progress", handleSwiper);
                    }}
                    spaceBetween={height / 2}
                >
                    <SwiperSlide
                        style={{ height: "30vh" }}
                        className="first-slide"
                    >
                        <span
                            className="svg1"
                            // transform: `translateX(calc(-50% - (${progress} / 0.01) * 50%))`,
                        >
                            <FullNameSVG />
                        </span>
                    </SwiperSlide>
                    <SwiperSlide>Vertical Slide 2</SwiperSlide>
                </Swiper>
            </SwiperSlide>
            <style>
                {`.swiper-back{
                    background: url(/sunset.jpg) no-repeat center center;
                }`}
            </style>
        </div>
    );
}
