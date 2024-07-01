import AnimatedBox from "components/animations/animatedBox";
import BackToHome from "components/backToHome";
import AchievedContent from "components/contents/achieved";
import AchievedSVG from "components/handwrites/achieved";
import useScrollPosition from "hooks/scrollPosition";
import useWindowSize from "hooks/windowSize";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AchievedMobile from "./mobile/achieved";

const Achieved = () => {
    const navigate = useNavigate();
    const textPartRef = useRef(null);
    const { scrollY } = useScrollPosition(textPartRef);
    const { phoneView } = useWindowSize();

    useEffect(() => {
        console.log(scrollY);
    }, [scrollY]);

    if(phoneView) return <AchievedMobile/>

    return (

        <main className="w-screen h-scalable bg-white relative flex overflow-hidden">
            <BackToHome/>
            <AnimatedBox className="h-screen w-screen p-20 mobile-flex split-2">
                <div className="half-container" style={{flexDirection: 'column'}}>
                    <img className="image-me image-hover" src="https://www.staszic.waw.pl/media/gallery/szkola/photo.jpg"/>
                    <span style={{fontSize: "0.7rem"}}>https://www.staszic.waw.pl/media/gallery/szkola/photo.jpg</span>
                </div>
                <div className="half-container text-part overflow-y-hidden" ref={textPartRef}>
                    <div className="block label">
                        <AchievedSVG/>
                    </div>
                    <div className="achieved-text-container">

                    <div className="achieved-text font-1 overflow-y-scroll">
                        <AchievedContent/>
                    </div>
                    </div>
                
                </div>
            </AnimatedBox>
        </main>
    );
};

export default Achieved;