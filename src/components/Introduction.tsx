import IntroductionImg from "../images/introduction.jpg";

const Introduction: React.FC = () => {
  return (
    <div>
      <div>
        <img src={IntroductionImg} alt="Introduction image" />
      </div>
      <div></div>
    </div>
  );
};

export default Introduction;
