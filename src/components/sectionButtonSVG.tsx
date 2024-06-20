import { ReactNode } from "react";
import { motion } from 'framer-motion';
import AnimatedBox from "./animations/animatedBox";

export type SectionButtonPropsType = {
    component: ReactNode,
    onClick?: () => void,
    // position: {x: number, y: number},
};

const SectionButtonSVG = (props: SectionButtonPropsType) => {
    return (
        <AnimatedBox className="section-btn flex" onClick={props.onClick} >
            {props.component}
            <div className="hover-border"/>
        </AnimatedBox>
    )
};

export default SectionButtonSVG;