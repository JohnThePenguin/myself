import { useEffect, useState } from "react";

const useScrollPosition = () => {
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    const handleScrollChange = () => {
        setScrollX(window.scrollX);
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollChange);

        return () => {
            window.removeEventListener('scroll', handleScrollChange);
        };
    }, []);

    return {scrollX, scrollY};
};

export default useScrollPosition;