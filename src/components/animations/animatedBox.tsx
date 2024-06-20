import { ReactElement, ReactNode } from "react";
import { ForwardRefComponent, HTMLMotionProps, motion } from 'framer-motion';

export type AnimatedBoxPropsTypeX = {
    component: ReactNode,
} & ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>;

export interface AnimatedBoxPropsType extends HTMLMotionProps<"div"> {
    children: ReactNode
}


const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.5,
};

const pageVariants = {
            init: {
                transition: {
                    duration: 0.5,
                },
                opacity: 0,
            },
            in: {
                transition: {
                    duration: 0.5,
                },
                opacity: 1,
            },
            out: {
                transition: {
                    duration: 0.5,
                },
                opacity: 0,
            },
}

const AnimatedBox: React.FC<AnimatedBoxPropsType> = ({children, ...divProps}) => {
    return (
        <motion.div
            initial="init"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            {...divProps}
        >
            {children}
        </motion.div>
    )
};

export default AnimatedBox;