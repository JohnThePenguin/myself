import AnimatedBox from "components/animations/animatedBox";
import AchievedSVG from "components/handwrites/achieved";
import ExperienceSVG from "components/handwrites/experience";
import useScrollPosition from "hooks/scrollPosition";
import useWindowSize from "hooks/windowSize";
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Experience = () => {
    const navigate = useNavigate();

    const [ textScrollHeight, setTextScrollHeight ] = useState<number>();

    const textPartRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScrollPosition(textPartRef);
    const { width, height } = useWindowSize();
    const sectionOneRef = useRef<HTMLDivElement>(null);
    const sectionTwoRef = useRef<HTMLDivElement>(null);
    const sectionThreeRef = useRef<HTMLDivElement>(null);


    const handleTextScroll = (e: any)=> {
        const scrollPosition = textPartRef.current?.scrollTop || 0;
        //cannot use scrollY, don't know why

        const arr = [sectionOneRef, sectionTwoRef, sectionThreeRef];
        console.log('scroll: ');
        console.log(scrollPosition);

        // console.log('first\' top: ');
        // console.log(arr[0].current!.getBoundingClientRect().top);

        let minDist = Infinity;
        let minIndex = 0;
        for(let i=0; i<=2; i++){
            console.log(i, ' -> ', arr[i].current!.getBoundingClientRect().top - scrollPosition);
            if(Math.abs(arr[i].current!.getBoundingClientRect().top - scrollPosition) <= minDist){
                minDist = Math.abs(arr[i].current!.getBoundingClientRect().top - scrollPosition);
                minIndex = i;
            }
        };
        // alert(minIndex);
        arr[minIndex].current!.scrollIntoView();
    };

    useEffect(() => {
        console.log(scrollY);

        // const { top, bottom } = sectionOneRef.current!.getBoundingClientRect();
        // console.log(top);
        // console.log(bottom);

        // console.log('----------');

    }, [scrollY]);

    useEffect(() => {
        setTextScrollHeight(textPartRef.current?.scrollHeight);

        // if(sectionOneRef && sectionOneRef.current){
        //     sectionOneRef.current!.getBoundingClientRect();
        //     const array: number[] = [];
        //     sections.map((section) => {
        //         // array.push(section.current!.getBoundingClientRect().top)
        //     });
        //     setSectionsY(array);
        // }
    
    }, [width, height]);

    useEffect(() => {
        textPartRef.current?.addEventListener('scrollend', handleTextScroll);
        return () => {
            textPartRef.current?.removeEventListener('scrollend', handleTextScroll);
        };
    }, []);

    return (
        <main className="w-screen h-scalable bg-white relative flex overflow-hidden">
            <AnimatedBox className="h-screen w-screen p-20 mobile-flex split-2">
                <div className="half-container">
                    <img
                        className="image-me image-hover"
                        src="https://www.staszic.waw.pl/media/gallery/szkola/photo.jpg"
                    />
                </div>
                <div
                    className="half-container text-part overflow-y-hidden"
                >
                    <div className="block label">
                        <ExperienceSVG />
                        {scrollY}
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
