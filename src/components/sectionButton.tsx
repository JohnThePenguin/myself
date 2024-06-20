import GlowingLabel from "./glowingText";
import ParticlesBackground from "./particles";

type SectionButtonPropsType = {
    label: string,
    onClick?: () => void,
    position: {x: number, y: number},
};

const SectionButton = (props: SectionButtonPropsType) => {
    return (
        <div className="absolute" style={{left: props.position.x, top: props.position.y}}>
            <span className="text-black text-lg">
                {/* <GlowingLabel text={props.label}/>  */}
                <span>{props.label}</span>
            </span>
        </div>
    );
};

export default SectionButton;