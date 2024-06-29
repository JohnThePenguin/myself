import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import "styles/content.css";

const AText = ({ children, d }: { children: ReactNode, d?: number }) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <p
            ref={ref}
            className="styled-text"
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                transitionDelay: (d || "0.3") + "s"
            }}
        >
            {children}
        </p>
    );
};

export default AText;