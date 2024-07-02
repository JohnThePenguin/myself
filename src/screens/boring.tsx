import AnimatedBox from "components/animations/animatedBox";
import BackToHome from "components/backToHome";
import AchievedContent from "components/contents/achieved";
import AchievedSVG from "components/handwrites/achieved";
import useScrollPosition from "hooks/scrollPosition";
import useWindowSize from "hooks/windowSize";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AchievedMobile from "./mobile/achieved";
import AText from "components/animations/animatedText";
import FullNameSVG from "components/handwrites/fullName";

const BoringStuff = () => {
    return (
        <main className="w-screen h-scalable bg-white relative flex-center overflow-hidden">
            <BackToHome/>
            <AnimatedBox className="p-20 svg-child-10vh flex-center flex-col">
                <AText>
                    Design, Code, Graphics, Technical service and Handwritings by
                </AText>
                <AText style={{justifyContent: 'center', alignItems: 'center'}}>
                    <FullNameSVG/>
                </AText>
                <AText>
                    Made in React 18
                </AText>
            </AnimatedBox>
        </main>
    );
};

export default BoringStuff;