import { useLayoutEffect, useState } from "react"

export type WindowsSizeType = {
    width: number,
    height: number,
};

const useWindowSize = () => {
    const [size, setSize] = useState<WindowsSizeType>({width: 0, height: 0});
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize({width: window.innerWidth, height: window.innerHeight});
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
};

export default useWindowSize;