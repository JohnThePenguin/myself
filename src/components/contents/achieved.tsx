import AText from "components/animations/animatedText";

export const AchievedText = [
    "I attended to XIV Liceum Ogólnokształcącego im. Stanisława Staszica in Warsaw, which at this time, was the best high school in country",
    "There I was on profile especially for math and informatics",
    "In my primary school, i was starting basically in every math competition that was available, for example in polish versions of math kangaroo",
    "It lead me to take part in Polish Junior Olympiad of Informatics, what got me to my next school",
    "I developed skills in computer algorithms",
    "By self-learning and creating own projects, I got good knowledge of C++, PHP and TypeScript",
];

const AchievedContent = () => {
    return (
        <div className="text-content achieved">
            {AchievedText.map((text, index) => 
                <AText d={(index + 3)/10}>{text}</AText>
            )}
        </div>
    );
};

export default AchievedContent;
