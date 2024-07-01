import AnimatedBox from "components/animations/animatedBox";
import BackToHome from "components/backToHome";
import TodayContent from "components/contents/today";
import AchievedSVG from "components/handwrites/achieved";
import BackSVG from "components/handwrites/back";
import TodaySVG from "components/handwrites/today";
import useScrollPosition from "hooks/scrollPosition";
import useWindowSize from "hooks/windowSize";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodayMobile from "./mobile/today";

const Today = () => {
    const navigate = useNavigate();
    const textPartRef = useRef(null);
    const { scrollY } = useScrollPosition(textPartRef);
    const { phoneView } = useWindowSize();

    if(phoneView) return <TodayMobile/>

    return (

        <main className="w-screen h-scalable bg-white relative flex overflow-hidden">
            <BackToHome/>
            <AnimatedBox className="h-screen w-screen p-20 mobile-flex split-2">
                <div className="half-container">
                    <img className="image-me image-hover" src="/today.png"/>
                </div>
                <div className="half-container text-part overflow-y-hidden" ref={textPartRef}>
                    <div className="block label">
                        <TodaySVG/>
                    </div>
                    <div className="achieved-text-container">

                    <div className="achieved-text font-1 overflow-y-scroll">
                        <TodayContent/>
                    </div>
                    </div>
                
                </div>
            </AnimatedBox>
        </main>
    );
};

export default Today;