import React, { ReactNode, useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import useWindowSize from "hooks/windowSize";

const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.5,
};

const AnimatedPage = ({ children }: { children: ReactNode }) => {
    const {size: windowSize} = useWindowSize();

    const [pageVariants, setPageVariants] = useState<Variants>({});

    useEffect(() => {
        setPageVariants({
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
        });
    }, [windowSize]);

    return (
        <motion.div
            initial="init"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
