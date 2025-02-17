import AText from "components/animations/animatedText";
import { LegacyRef, forwardRef } from "react";
import 'styles/content.css';

type DivRef = LegacyRef<HTMLDivElement>;

export const SectionsTexts = [
    {
        title: "School app",
        content: [
            "While me and my friends were making up school council, we had an idea to create some big mobile app for school community",
            // "And we have created it",
            "App is posted on App Store and Google Play, and at the peak time it had over 600 active users across Warsaw middle schools",
            "Our team was made up of classmates, helping and learning from each other",
            // "It is one of the biggest thing I have ever created",
            "Right now, app is under reconstruction",
            // "Built in React Native and Express JS - Bangla"
        ],
        image: "/experience/stinder.png",
    },
    {
        title: "Theoretical Computer Science",
        content: [
            "Since 2020 I have stayed in constant touch with algorithmic programming",
            "I have started multiple times in Polish Olympiad of Informatics",
            "While preparing, I was taught numerous algorithms and ideas and also learned kind of algorithmic thinking",
            "I liked it, I was not a master, but I would consider myself as alright in this field",
            "Creating something practical that someone can use, gives me much more satisfaction"
        ],
        image: "/experience/algorithms.png"
    },
    {
        title: "Inventory Management System",
        content: [
            "After gathering experience from small fun projects, I moved on to creating bigger services",
            "Me and my friend made a huge and complex web service for controlling medical products in warehouse",
            "Product has been written for small company, which uses it still today",
            "We still maintain service and develop new features there",
            "Some of functions are developing devices, clients, users, permission groups and much more",
            "App has a well built integration with excel for imports and exports"
        ],
        image: "/experience/inventory.png"
    },
    {
        title: "Work as administrator at high school",
        content: [
            "After being a younger assistance, I become a formal network administrator at XIV high school named after Stanisław Staszic in Warsaw",
            "I have worked there since Octomber 2024, studying in parallel",
            "My job is to maintain currently working services, and create new ones",
            "Generally I must provide that students and teachers are able to work with each other comfortable"
        ],
        image: "/experience/admin.png",
    },
    {
        title: "Company with friend",
        content: [
            "With my good friend we managed together many various projects",
            "We have created things like: ",
            " - Previously mentioned inventory management system",
            " - Pack of apps, for copmpany and its clients, including sales mobile app, price monitoring website and management panel",
            " - Web service for managing court trial simulations for high school students",
            "And many other, including AIs",
            "More at spryte.dev"
        ],
        image: "/experience/spryte.png",
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