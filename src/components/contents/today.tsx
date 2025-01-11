import AText from "components/animations/animatedText";

export const TodayText = [
    "Today, I look for vacation internship",
    "I would like to learn more and push my skills and abilities further",
    "I have a lot of experience in working in small groups with my colleagues, but i have never been a part of bigger product",
    "That is why I would like to have chance to work in already built and well-developed company",
    "I think that I would perform the best at things that I am already familiar with so generally developing software",
    "But I am always open to new challenges and I am willing to learn new things",
    "If You feel that I would be a right person for Your team, please send me an email to jj.ancuta@gmail.com"
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
