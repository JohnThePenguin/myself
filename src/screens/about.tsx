import AnimatedBox from "components/animations/animatedBox";
import AncutaSVG from "components/handwrites/ancuta";
import JanSVG from "components/handwrites/jan";
import YearsSVG from "components/handwrites/years";
import useScrollPosition from "hooks/scrollPosition";
import useWindowSize from "hooks/windowSize";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const textPartRef = useRef(null);
    const { scrollY } = useScrollPosition(textPartRef);
    const { height } = useWindowSize();

    useEffect(() => {
        console.log(scrollY);
    }, [scrollY]);

    return (

        <main className="w-screen h-scalable bg-white relative flex overflow-hidden">
            <AnimatedBox className="h-screen w-screen p-20 mobile-flex split-2">
                <div className="half-container">
                    <img className="image-me image-hover" src="/sunset.jpg"/>
                </div>
                <div className="half-container text-part" ref={textPartRef}>
                    <div className="about-me-text font-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                    </div>
                
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