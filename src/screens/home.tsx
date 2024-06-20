import AboutMeSVG from "components/handwrites/aboutMe";
import AchievedSVG from "components/handwrites/achieved";
import BoringStuffSVG from "components/handwrites/boringStuff";
import ExperienceSVG from "components/handwrites/experience";
import TodaySVG from "components/handwrites/today";
import SectionButtonSVG from "components/sectionButtonSVG";
import React from "react";
import { useNavigate } from "react-router-dom";
// import AboutMe from '@/public/handwriting/WCM0014.svg'
// import Image from 'next/image';

const Home = () => {
    const navigate = useNavigate();

    return (
        <main className="w-screen h-screen bg-white relative flex">
            <div className="h-screen w-screen p-20 flex mobile-flex">
                <SectionButtonSVG
                    component={<AboutMeSVG/>}
                    onClick={()=>{navigate('/about')}}
                />

                <SectionButtonSVG
                    component={<AchievedSVG/>}
                    onClick={()=>{navigate('/achieved')}}
                />

                <SectionButtonSVG
                    component={<ExperienceSVG/>}
                />

                <SectionButtonSVG
                    component={<TodaySVG/>}
                />

                <SectionButtonSVG
                    component={<BoringStuffSVG/>}
                />
            </div>
        </main>
    );
};

export default Home;