import AText from "components/animations/animatedText";
import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import "styles/content.css";

const AboutMeContent = () => {
    return (
        <div className="text-content about-me">
            <AText>Hi, i am Janek.</AText>
            <AText>
                I am 18 years old and month ago i have written polish matura
                exam, finishing high school.
            </AText>
            <AText>
                When I was younger, my interests was about math, sport and art.
            </AText>
            <AText>
                I was taking part in mathematic competitions, attending to
                drawing lessons, playing football and spending time on
                skatepark.
            </AText>
            <AText>
                Since last classes of primary school, i have mainly focused on
                informatics. I love building my own projects, and working on
                them with my friends.{" "}
            </AText>
            <AText>
                I have also a lot of experience with algorithmic and competitive
                programming.
            </AText>
        </div>
    );
};

export const AboutMeContentMobileOne = () => {
    return (
        <div className="text-content about-me">
            <AText>Hi, i am Janek.</AText>
            <AText>
                I am 18 years old and month ago i have written polish matura
                exam, finishing high school.
            </AText>
            <AText>
                When I was younger, my interests was about math, sport and art.
            </AText>
        </div>
    );
};

export const AboutMeContentMobileTwo = () => {
    return (
        <div className="text-content about-me">
            <AText>
                I was taking part in mathematic competitions, attending to
                drawing lessons, playing football and spending time on
                skatepark.
            </AText>
            <AText>
                Since last classes of primary school, i have mainly focused on
                informatics. I love building my own projects, and working on
                them with my friends.
            </AText>
            <AText>
                I have also a lot of experience with algorithmic and competitive
                programming.
            </AText>
        </div>
    );
};

export default AboutMeContent;
