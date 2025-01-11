import AText from "components/animations/animatedText";

export const AchievedText = [
    "Currently, I am at the first year of Computer Science at the University of Warsaw at the Faculty of Mathematics and Information Science",
    "I attended to XIV Liceum Ogólnokształcącego im. Stanisława Staszica in Warsaw, which at this time, was the best high school in country",
    "My class profile was math and informatics",
    "In primary school, I was taking part basically in every math competition that was available, for example in polish versions of math kangaroo",
    "It lead me to compete in Polish Junior Olympiad of Informatics, where I won my pass to the high school",
    "There I developed skills in computer algorithms",
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
