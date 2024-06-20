import AnimatedBox from "components/animations/animatedBox";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (

        <main className="w-screen h-screen bg-white relative flex">
            <AnimatedBox className="h-screen w-screen p-20 flex mobile-flex">
                <p className="text-black">breathe</p>
                <button onClick={() => navigate('/')}><p className="text-black"> button </p></button>
            </AnimatedBox>
        </main>
    );
};

export default About;