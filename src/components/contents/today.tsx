import AText from "components/animations/animatedText";

export const TodayText = [
    "These days, after finishing high school I wait for new semester on university",
    "So I wanted to learn something new and gain new experience",
    "That is why I would like to work in already developed, bigger company",
    "I thing that I would perform the best at things that i am already familiar with, so generally developing software",
];

const TodayContent = () => {
    return (
        <div className="text-content today">
            {TodayText.map((text, index) => (
                <AText d={(index + 3) / 10}>{text}</AText>
            ))}
        </div>
    );
};

export default TodayContent;
