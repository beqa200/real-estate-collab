import IntroductionImg from "../images/introduction/introduction.png";
import RountAd from "../images/Introduction/round-ad.png";

const Introduction: React.FC = () => {
  return (
    <div>
      <div>
        <img src={IntroductionImg} alt="Introduction image" />
        <img src={RountAd} alt="Ad" />
      </div>
      <div></div>
    </div>
  );
};

export default Introduction;
