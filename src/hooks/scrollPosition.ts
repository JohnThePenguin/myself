import { useEffect, useState } from "react";

const useScrollPosition = (ref?: any) => {
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    const handleScrollChange = () => {
        if(ref && ref.current){
            setScrollX(ref.current.scrollLeft);
            setScrollY(ref.current.scrollTop);
        }
        else{
            setScrollX(ref.scrollX);
            setScrollY(ref.scrollY);
        }
    };

    useEffect(() => {
        const target = ref ? ref.current : window;

        target.addEventListener('scroll', handleScrollChange);

        return () => {
            target.removeEventListener('scroll', handleScrollChange);
        };
    }, [ref]);

    return {scrollX, scrollY};
};

export default useScrollPosition;