import AnimatedBox from "components/animations/animatedBox";
import useScrollPosition from "hooks/scrollPosition";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const { scrollY } = useScrollPosition();

    useEffect(() => {
        console.log(scrollY);
    }, [scrollY]);

    return (

        <main className="w-screen h-scalable bg-white relative flex">
            <AnimatedBox className="h-screen w-screen p-20 mobile-flex split-2">
                <div className="half-container">
                    <img className="image-me" src="/sunset.jpg"/>
                </div>
                <div className="half-container">
                {/* my name is  */}
                {/* jan ancuta */}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi voluptatum quasi sunt. Commodi, ab odio nobis hic mollitia perspiciatis culpa labore expedita ducimus autem cupiditate alias adipisci sapiente, asperiores nemo magni, molestiae sit similique! Impedit sunt ipsam quibusdam porro animi unde, quisquam vel autem non amet consequatur! Unde adipisci consequatur vel, eius aliquid dignissimos hic veniam fuga. Debitis ab sapiente harum rerum molestiae distinctio ea odit officiis maxime vitae consequatur, ducimus voluptates asperiores temporibus, provident, velit adipisci. Placeat totam iure facere corrupti, ratione accusantium nulla exercitationem tenetur dicta impedit cupiditate, harum fugit id, inventore quo ad sit? Iste, unde.
                </div>
            </AnimatedBox>
        </main>
    );
};

export default About;

/*

<p className="hidden" style={{position: 'fixed', transform: `translateX(${scrollY}px)`, transition: "transform 0.3s ease-out"}}>
*/