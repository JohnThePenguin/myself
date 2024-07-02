import AnimatedBox from "components/animations/animatedBox";
import BackToHome from "components/backToHome";
import AncutaSVG from "components/handwrites/ancuta";
import JanSVG from "components/handwrites/jan";
import YearsSVG from "components/handwrites/years";
import useScrollPosition from "hooks/scrollPosition";
import useWindowSize from "hooks/windowSize";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutMobile from "./mobile/about";
import AboutMeContent from "components/contents/about";
import { NextButton } from "./mobile/achieved";

const About = () => {
    const navigate = useNavigate();
    const textPartRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScrollPosition(textPartRef);
    const { size: {height}, phoneView } = useWindowSize();
    const [hideNextButton, setHideNextButton] = useState(false);

    useEffect(() => {
        if(!textPartRef.current) return;

        if(scrollY + 100 > textPartRef.current?.scrollHeight - textPartRef.current?.clientHeight)
            setHideNextButton(true);    
        else
            setHideNextButton(false);
    }, [scrollY]);

    if(phoneView) return <AboutMobile/>;

    return (

        <main className="w-screen h-scalable bg-white relative flex overflow-hidden">
            <BackToHome/>
            <AnimatedBox className="h-screen w-screen p-20 mobile-flex split-2">
                <div className="half-container" style={{flexDirection: 'column'}}>
                    <img className="image-me image-hover" src="/sunset.jpg"/>
                    <span style={{fontSize: "0.7rem"}}>jj.ancuta@gmail.com</span>
                </div>
                <div className="half-container text-part">
                    <div className="text-part smaller" ref={textPartRef}>
                        <div className="about-me-text font-1">
                            <AboutMeContent/>
                        </div>
                    </div>
                    <NextButton hide={hideNextButton}/>
                </div>
            </AnimatedBox>
            <AnimatedBox>
                    <div className="big-label ancuta" style={{
                        transform: `translate(${-scrollY*1.5}px, ${-scrollY*1.5}px) rotate(${(scrollY/height)/5}turn)`,
                    }}  >
                        <AncutaSVG/>
                    </div>

                    <div className="big-label jan" style={{
                        transform: `translate(${scrollY*1.5}px, ${-scrollY*3}px) rotate(${(-scrollY/height)/7}turn)`,
                    }}>
                        <JanSVG/>
                    </div>

                    <div className="big-label years" style={{
                        transform: `translate(${scrollY*2.5}px, ${scrollY*0.8}px) rotate(${(-scrollY/height)/7}turn)`,
                    }}>
                        <YearsSVG/>
                    </div>
            </AnimatedBox>
        </main>
    );
};

export default About;