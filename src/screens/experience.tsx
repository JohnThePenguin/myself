import AnimatedBox from "components/animations/animatedBox";
import BackToHome from "components/backToHome";
import ExperienceContent from "components/contents/experience";
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
    const { size: {width, height} } = useWindowSize();

    const sectionOneRef = useRef<HTMLDivElement>(null);
    const sectionTwoRef = useRef<HTMLDivElement>(null);
    const sectionThreeRef = useRef<HTMLDivElement>(null);
    const sectionFourRef = useRef<HTMLDivElement>(null);
    const sectionFiveRef = useRef<HTMLDivElement>(null);

    const [imageOneY, setImageOneY] = useState(0);
    const [imageTwoY, setImageTwoY] = useState(0);
    const [imageThreeY, setImageThreeY] = useState(0);
    const [imageFourY, setImageFourY] = useState(0);
    const [imageFiveY, setImageFiveY] = useState(0);

    const [startPosition, setStartPosition] = useState(0);

    const handleTextScroll = (e: any)=> {
        const arr = [sectionOneRef, sectionTwoRef, sectionThreeRef, sectionFourRef, sectionFiveRef];

        let minDist = Infinity;
        let minIndex = 0;
        for(let i=0; i<=4; i++){
            const sizes = arr[i].current!.getBoundingClientRect();
            console.log(i, ' -> ', sizes.top);
            
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

        setImageFourY(
            (sectionFourRef.current!.getBoundingClientRect().top - startPosition) * 3
        );

        setImageFiveY(
            (sectionFiveRef.current!.getBoundingClientRect().top - startPosition) * 3
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
            <BackToHome/>
            <AnimatedBox className="h-screen w-screen p-20 mobile-flex split-2">
                <div className="half-container h-full overflow-y-hidden">
                    <SectionImage translateY={imageOneY} 
                        src={ExperienceContent.SectionOneImg}/>

                    <SectionImage translateY={imageTwoY} 
                        src={ExperienceContent.SectionOneImg}/>

                    <SectionImage translateY={imageThreeY} 
                        src={ExperienceContent.SectionOneImg}/>

                    <SectionImage translateY={imageFourY} 
                        src={ExperienceContent.SectionOneImg}/>

                    <SectionImage translateY={imageFiveY} 
                        src={ExperienceContent.SectionOneImg}/>
                </div>
                <div
                    className="half-container text-part overflow-y-hidden"
                >
                    <div className="block label">
                        <ExperienceSVG />
                    </div>
                    <div className="achieved-text-container h-full">
                        <div className="achieved-text font-1 overflow-y-scroll" ref={textPartRef}>
                            <ExperienceContent.SectionOne ref={sectionOneRef}/>
                            <ExperienceContent.SectionTwo ref={sectionTwoRef}/>
                            <ExperienceContent.SectionThree ref={sectionThreeRef}/>
                            <ExperienceContent.SectionFour ref={sectionFourRef}/>
                            <ExperienceContent.SectionFive ref={sectionFiveRef}/>
                        </div>
                    </div>
                </div>
            </AnimatedBox>
        </main>
    );
};

export default Experience;
