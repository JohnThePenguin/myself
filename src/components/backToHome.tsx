import { useNavigate } from "react-router-dom";
import AnimatedBox from "./animations/animatedBox";
import ArrowBackSVG from "./handwrites/arrowBack";
import useWindowSize from "hooks/windowSize";

const BackToHome = () => {
    const navigate = useNavigate();
    const { phoneView } = useWindowSize();

    return (
        <AnimatedBox>

        <div
            className={!phoneView ? 
                "absolute top-0 left-0 p-10 h-28 fill-svg z-10" : 
                "absolute top-0 left-0 p-4 h-16 fill-svg z-10"
            }
            onClick={() => navigate("/")}
            style={{cursor: "pointer"}}
            >
            <ArrowBackSVG />
        </div>
        </AnimatedBox>
    );
};

export default  BackToHome;
