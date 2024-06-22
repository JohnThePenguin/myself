import AnimatedBox from "components/animations/animatedBox";
import BackToHome from "components/backToHome";
import AchievedSVG from "components/handwrites/achieved";
import BackSVG from "components/handwrites/back";
import TodaySVG from "components/handwrites/today";
import useScrollPosition from "hooks/scrollPosition";
import useWindowSize from "hooks/windowSize";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Today = () => {
    const navigate = useNavigate();
    const textPartRef = useRef(null);
    const { scrollY } = useScrollPosition(textPartRef);

    useEffect(() => {
        console.log(scrollY);
    }, [scrollY]);

    return (

        <main className="w-screen h-scalable bg-white relative flex overflow-hidden">
            <BackToHome/>
            <AnimatedBox className="h-screen w-screen p-20 mobile-flex split-2">
                <div className="half-container">
                    <img className="image-me image-hover" src="https://www.staszic.waw.pl/media/gallery/szkola/photo.jpg"/>
                </div>
                <div className="half-container text-part overflow-y-hidden" ref={textPartRef}>
                    <div className="block label">
                        <TodaySVG/>
                    </div>
                    <div className="achieved-text-container">

                    <div className="achieved-text font-1 overflow-y-scroll">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                    </div>
                    </div>
                
                </div>
            </AnimatedBox>
        </main>
    );
};

export default Today;