import AText from "components/animations/animatedText";
import { LegacyRef, forwardRef } from "react";
import 'styles/content.css';

type DivRef = LegacyRef<HTMLDivElement>;

export const SectionsTexts = [
    {
        title: "School app",
        content: [
            "While me and my friends were making up school council, we had an idea to create some big mobile app for school community",
            "And we have created it",
            "App is posted on App Store and Apple Play, and once we had 200 active users across out high school only",
            "Our team was created of class mates, helping and learning from each other",
            "It is the biggest thing i have ever created",
            "Built in React Native and Express JS - Stinder"
        ],
        image: "/experience/stinder.png",
    },
    {
        title: "Various projects for fun",
        content: [
            "I have written a lot of different small projects, usually not finished them",
            "I was having fun creating some games in C++ from Youtube videos",
            "There was also some useful programs, or small experiences with developing Android app with Java",
            "Generally when I don't have idea what to do today, I think what what could I continue or start new "
        ],
        image: "/experience/fun-stuff.png",
    },
    {
        title: "C++ Website",
        content: [
            "Once as school project I had to create website",
            "As someone who hadn't known anything, i chose to do it in standard HTML, PHP and js",
            "In spite of lack of knowledge, it turned out to be good looking and well functioning",
            "Website had user accounts system and couple of sub-sites describing basics of C++ language"
        ],
        image: "/experience/janinf-w-staszic.png",
    },
    {
        title: "Theoretical Informatics",
        content: [
            "Since 2020 i have stayed in constant touch with algorithmic programming",
            "I have started multiple times in Polish Olympiad of Informatics",
            "While preparing, I was taught numerous algorithms and ideas and also learned kind of algorithmic thinking",
            "I liked it, i was not a master, but i would consider myself as alright in this field",
            "Creating something, that some one can use now gives me much more satisfaction"
        ],
        image: "/experience/algorithms.png"
    },
    {
        title: "Advanced Projects",
        content: [
            "After gathering experience from small fun projects, i moved on to creating bigger services",
            "I was working on things like product warehouse management app, hosting events website or kind of market app",
            "Taking care of more serious things, taught me a lot and also got me plenty of experience"
        ],
        image: "/experience/spryte.png"
    },
]

const Section = forwardRef((props: {title: string, content: string[]}, ref: DivRef) => {
    return (
        <div className="experience-section" ref={ref}>
            <div className="experience-section-header">
                <AText>{props.title}</AText>
            </div>
            <div className="experience-section-text">
                {props.content.map((text, index) => (
                    <AText d={(index + 4) / 10}>{text}</AText>
                ))}
            </div>
        </div>
    );
});

const SectionOne = forwardRef((props, ref: DivRef) => {
    return <Section
        ref={ref} 
        title={SectionsTexts[0].title} 
        content={SectionsTexts[0].content}
    />;
});

const SectionTwo = forwardRef((props, ref: DivRef) => {
    return <Section
        ref={ref}
        title={SectionsTexts[1].title} 
        content={SectionsTexts[1].content}
    />;
});


const SectionThree = forwardRef((props, ref: DivRef) => {
    return <Section
        ref={ref} 
        title={SectionsTexts[2].title} 
        content={SectionsTexts[2].content}
    />;
});

const SectionFour = forwardRef((props, ref: DivRef) => {
    return <Section
        ref={ref} 
        title={SectionsTexts[3].title} 
        content={SectionsTexts[3].content}
    />;
});

const SectionFive = forwardRef((props, ref: DivRef) => {
    return <Section
        ref={ref} 
        title={SectionsTexts[4].title} 
        content={SectionsTexts[4].content}
    />;
});



const ExperienceContent = {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionOneImg: SectionsTexts[0].image,
    SectionTwoImg: SectionsTexts[1].image,
    SectionThreeImg: SectionsTexts[2].image,
    SectionFourImg: SectionsTexts[3].image,
    SectionFiveImg: SectionsTexts[4].image,
};

export default ExperienceContent;