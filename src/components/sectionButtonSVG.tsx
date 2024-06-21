import { ReactNode } from "react";
import AnimatedBox from "./animations/animatedBox";

export type SectionButtonPropsType = {
    component: ReactNode,
    onClick?: () => void,
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