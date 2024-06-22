import { useNavigate } from "react-router-dom";
import BackSVG from "./handwrites/back";
import AnimatedBox from "./animations/animatedBox";

const BackToHome = () => {
    const navigate = useNavigate();

    return (
        <AnimatedBox>

        <div
            className="absolute top-0 left-0 p-10 h-28 fill-svg"
            onClick={() => navigate("/")}
            style={{cursor: "pointer"}}
            >
            <BackSVG />
        </div>
        </AnimatedBox>
    );
};

export default  BackToHome;
