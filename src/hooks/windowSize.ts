import { useLayoutEffect, useState } from "react"

export type WindowsSizeType = {
    width: number,
    height: number,
};

const useWindowSize = () => {
    const [size, setSize] = useState<WindowsSizeType>({width: 0, height: 0});
    const [phoneView, setPhoneView] = useState<boolean>(false);


    useLayoutEffect(() => {
        const updateSize = () => {
            setSize({width: window.innerWidth, height: window.innerHeight});
            setPhoneView(window.innerHeight > window.innerWidth);
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return { size, phoneView };
};

export default useWindowSize;