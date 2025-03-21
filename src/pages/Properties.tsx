import FindPropertyAd from "../components/properties/FindPropertyAd";
import Filter from "../components/properties/Filter";
import ResultProducts from "../components/properties/ResultProducts";
import Stars from "../images/home/stars.png";

const Properties: React.FC = () => {
  return (
    <>
      <FindPropertyAd />
      <Filter />
      <ResultProducts stars={Stars} />
    </>
  );
};

export default Properties;
