import AnimatedBox from "components/animations/animatedBox";
import AchievedSVG from "components/handwrites/achieved";
import ExperienceSVG from "components/handwrites/experience";
import useScrollPosition from "hooks/scrollPosition";
import useWindowSize from "hooks/windowSize";
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const SectionImage = ({src, translateY} : {src: string, translateY: number}) => {
    return (
        <div className="animated-image" style={{
            transform: `translateY(${translateY}px)`,
        }}>
            <img
                className="image-me image-hover"
                src={src}
            />
        </div>
    )
};

const Experience = () => {
    const navigate = useNavigate();

    const [ textScrollHeight, setTextScrollHeight ] = useState<number>();

    const textPartRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScrollPosition(textPartRef);
    const { width, height } = useWindowSize();
    const sectionOneRef = useRef<HTMLDivElement>(null);
    const sectionTwoRef = useRef<HTMLDivElement>(null);
    const sectionThreeRef = useRef<HTMLDivElement>(null);
    const [startPosition, setStartPosition] = useState(0);
    const [imageOneY, setImageOneY] = useState(0);
    const [imageTwoY, setImageTwoY] = useState(0);
    const [imageThreeY, setImageThreeY] = useState(0);

    const handleTextScroll = (e: any)=> {
        const scrollPosition = textPartRef.current?.scrollTop || 0;
        //cannot use scrollY, don't know why

        const arr = [sectionOneRef, sectionTwoRef, sectionThreeRef];

        let minDist = Infinity;
        let minIndex = 0;
        for(let i=0; i<=2; i++){
            const sizes = arr[i].current!.getBoundingClientRect();
            console.log(i, ' -> ', sizes.top);

            // if(sizes.top - startPosition < 0 && sizes.bottom - startPosition > textPartRef.current!.clientHeight/2){
            //     return;
            // }
            
            if(Math.abs(sizes.top - startPosition - 150) <= minDist){
                minDist = Math.abs(sizes.top - startPosition - 150);
                minIndex = i;
            }
        };

        requestAnimationFrame(() =>
            arr[minIndex].current!.scrollIntoView()
        );
    };

    useEffect(() => {
        setImageOneY(
            (sectionOneRef.current!.getBoundingClientRect().top - startPosition) * 3
        );

        setImageTwoY(
            (sectionTwoRef.current!.getBoundingClientRect().top - startPosition) * 3
        );

        setImageThreeY(
            (sectionThreeRef.current!.getBoundingClientRect().top - startPosition) * 3
        );

    }, [scrollY, startPosition]);

    useEffect(() => {
        setTextScrollHeight(textPartRef.current?.scrollHeight);
    }, [width, height]);

    useEffect(() => {
        if(sectionOneRef && sectionOneRef.current){
            setStartPosition(sectionOneRef.current.getBoundingClientRect().top);
            // alert(sectionOneRef.current.getBoundingClientRect().top);
        }

        textPartRef.current?.addEventListener('scrollend', handleTextScroll);
        return () => {
            textPartRef.current?.removeEventListener('scrollend', handleTextScroll);
        };
    }, []);

    return (
        <main className="w-screen h-scalable bg-white relative flex overflow-hidden">
            <AnimatedBox className="h-screen w-screen p-20 mobile-flex split-2">
                <div className="half-container h-full overflow-y-hidden">
                    <SectionImage translateY={imageOneY} 
                        src="https://www.staszic.waw.pl/media/gallery/szkola/photo.jpg"/>

                    <SectionImage translateY={imageTwoY} 
                        src="https://www.staszic.waw.pl/media/gallery/szkola/photo.jpg"/>


                    <SectionImage translateY={imageThreeY} 
                        src="https://www.staszic.waw.pl/media/gallery/szkola/photo_5.jpg"/>
                </div>
                <div
                    className="half-container text-part overflow-y-hidden"
                >
                    <div className="block label">
                        <ExperienceSVG />
                    </div>
                    <div className="achieved-text-container h-full">
                        <div className="achieved-text font-1 overflow-y-scroll" ref={textPartRef}>
                            <div className="experience-section">
                                <div className="experience-section-header" ref={sectionOneRef}>
                                    General what have i been doing - 1111
                                </div>
                                <div className="experience-section-text">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Impedit eligendi
                                    voluptatum quasi sunt. Commodi, ab odio
                                    nobis hic mollitia perspiciatis culpa labore
                                    expedita ducimus autem cupiditate alias
                                    adipisci sapiente, asperiores nemo magni,
                                    molestiae sit similique! Impedit sunt ipsam
                                    quibusdam porro animi unde, quisquam vel
                                    autem non amet consequatur! Unde adipisci
                                    consequatur vel, eius aliquid dignissimos
                                    hic veniam fuga. Debitis ab sapiente harum
                                    rerum molestiae distinctio ea odit officiis
                                    maxime vitae consequatur, ducimus voluptates
                                    asperiores temporibus, provident, velit
                                    adipisci. Placeat totam iure facere
                                    corrupti, ratione accusantium nulla
                                    exercitationem tenetur dicta impedit
                                    cupiditate, harum fugit id, inventore quo ad
                                    sit? Iste, unde.
                                    quibusdam porro animi unde, quisquam vel
                                    autem non amet consequatur! Unde adipisci
                                    consequatur vel, eius aliquid dignissimos
                                    hic veniam fuga. Debitis ab sapiente harum
                                    rerum molestiae distinctio ea odit officiis
                                    maxime vitae consequatur, ducimus voluptates
                                    asperiores temporibus, provident, velit
                                    adipisci. Placeat totam iure facere
                                    corrupti, ratione accusantium nulla
                                    exercitationem tenetur dicta impedit
                                    cupiditate, harum fugit id, inventore quo ad
                                    sit? Iste, unde.
                                </div>
                            </div>

                            <div className="experience-section" ref={sectionTwoRef}>
                                <div className="experience-section-header">
                                    General what have i been doing - 222
                                </div>
                                <div className="experience-section-text">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Impedit eligendi
                                    voluptatum quasi sunt. Commodi, ab odio
                                    nobis hic mollitia perspiciatis culpa labore
                                    expedita ducimus autem cupiditate alias
                                    adipisci sapiente, asperiores nemo magni,
                                    molestiae sit similique! Impedit sunt ipsam
                                    quibusdam porro animi unde, quisquam vel
                                    autem non amet consequatur! Unde adipisci
                                    consequatur vel, eius aliquid dignissimos
                                    hic veniam fuga. Debitis ab sapiente harum
                                    rerum molestiae distinctio ea odit officiis
                                    maxime vitae consequatur, ducimus voluptates
                                    asperiores temporibus, provident, velit
                                    adipisci. Placeat totam iure facere
                                    corrupti, ratione accusantium nulla
                                    exercitationem tenetur dicta impedit
                                    cupiditate, harum fugit id, inventore quo ad
                                    sit? Iste, unde.
                                </div>
                            </div>

                            <div className="experience-section" ref={sectionThreeRef}>
                                <div className="experience-section-header">
                                    General what have i been doing - 3333
                                </div>
                                <div className="experience-section-text">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Impedit eligendi
                                    voluptatum quasi sunt. Commodi, ab odio
                                    nobis hic mollitia perspiciatis culpa labore
                                    expedita ducimus autem cupiditate alias
                                    adipisci sapiente, asperiores nemo magni,
                                    molestiae sit similique! Impedit sunt ipsam
                                    quibusdam porro animi unde, quisquam vel
                                    autem non amet consequatur! Unde adipisci
                                    consequatur vel, eius aliquid dignissimos
                                    hic veniam fuga. Debitis ab sapiente harum
                                    rerum molestiae distinctio ea odit officiis
                                    maxime vitae consequatur, ducimus voluptates
                                    asperiores temporibus, provident, velit
                                    adipisci. Placeat totam iure facere
                                    corrupti, ratione accusantium nulla
                                    exercitationem tenetur dicta impedit
                                    cupiditate, harum fugit id, inventore quo ad
                                    sit? Iste, unde.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedBox>
        </main>
    );
};

export default Experience;
