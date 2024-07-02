import AText from "components/animations/animatedText";

export const TodayText = [
    "These days, after finishing high school I'm waiting for new semester on university",
    "So I wanted to learn something new and gain new experience",
    "That is why I would like to work in well-developed company",
    "I think that I would perform the best at things that I am already familiar with so generally developing software",
    "If You feel that we can help each other, please send me an email to jj.ancuta@gmail.com"
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
