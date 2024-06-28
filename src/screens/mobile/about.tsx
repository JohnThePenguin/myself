import AnimatedBox from "components/animations/animatedBox";
import BackToHome from "components/backToHome";
import AncutaSVG from "components/handwrites/ancuta";
import JanSVG from "components/handwrites/jan";
import YearsSVG from "components/handwrites/years";
import useScrollPosition from "hooks/scrollPosition";
import useWindowSize from "hooks/windowSize";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HTMLMotionProps, motion } from "framer-motion";

export interface AnimatedBoxPropsType extends HTMLMotionProps<"div"> {
    children: ReactNode;
}

const AnimatedSection: React.FC<AnimatedBoxPropsType> = ({
    children,
    ...divProps
}) => {
    const pageTransition = {
        type: "tween",
        ease: "easeIn",
        duration: 0.5,
    };

    const pageVariants = {
        init: {
            y: "80vh",
        },
        in: {
            y: 0,
        },
        out: {
            y: "-100vh",
        },
    };

    return (
        <motion.div
            transition={pageTransition}
            variants={pageVariants}
            initial="init"
            animate="in"
            exit="out"
            {...divProps}
        >
            {children}
        </motion.div>
    );
};

const colors = [
    '#435FAA',
    '#FF5BAA',
    '#1E5CCA',
    '#13F1AC',
    '#A3FAAC',
]

const AboutMobile = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const sectionContainer = useRef<HTMLDivElement | null>(null);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const {size: {height}} = useWindowSize();

    const scrollTo = (index: number) => {
        window.scrollTo({top: index * height, behavior: 'smooth'});
    };
    
    const scrollHandler = (ev: WheelEvent) => {
        ev.preventDefault();

        console.log('running scrollHandler');
        if(scrolling) return false;

        const direction = ev.deltaY > 0 ? 1 : -1;
        const newSection = currentSection + direction;
        console.log(newSection);

        if(0 <= newSection && newSection < sectionRefs.current.length){   
            setCurrentSection(newSection);
            setScrolling(true);
        }
    };

    const scrollEndHandler = () => {
        console.log('scrolling finished')
        setScrolling(false);
    };


    useEffect(() => {
        scrollTo(currentSection);
    }, [currentSection]);


    useEffect(() => {
        window.addEventListener('wheel', scrollHandler);
        window.addEventListener('scroll', (e)=>e.preventDefault());
        window.addEventListener('scrollend', scrollEndHandler);

        return () => {
            window.removeEventListener('wheel', scrollHandler);
            window.removeEventListener('scrollend', scrollEndHandler);
        }
    }, []);

    return (
        <main className="w-screen h-scalable bg-white"
            style={{
            }}
        >
            {/* <button style={{position: 'fixed', zIndex: 10}} onClick={() => {scrollTo(0)}}>click that wow</button> */}
            <div  
                    ref={(r) => {sectionRefs.current[0] = r}}
                    style={{
                        width: '100vw', 
                        height: '100vh', 
                        backgroundColor: colors[0], 
                        position: 'sticky', 
                        top: 0, 
                        zIndex: 0
                    }}>
                {"text -> " + 0}
            </div>

            <div  
                    ref={(r) => {sectionRefs.current[1] = r}}
                    style={{
                        width: '100vw', 
                        height: '100vh', 
                        backgroundColor: colors[1], 
                        position: 'sticky', 
                        top: 0, 
                        zIndex: 0
                    }}>
                {"text -> " + 1}
            </div>

                    <div key={2}  
                    ref={(r) => {sectionRefs.current[2] = r}}
                    style={{
                        width: '100vw', 
                        height: '100vh', 
                        backgroundColor: colors[2], 
                        position: 'sticky', 
                        top: 0, 
                        zIndex: 10
                    }}>
                text 2
            </div>
        </main>
    );
};

export default AboutMobile;
