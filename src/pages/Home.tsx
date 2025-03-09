import Introduction from "../components/Introduction";
import Opportunities from "../components/Opportunities";
import Products from "../components/Products";
import Ratings from "../components/Ratings";
import Stars from "../images/home/stars.png";
import LeftArrow from "../images/home/arrow-left.png";
import RightArrow from "../images/home/arrow-right.png";
import Faq from "../components/faq";

const Home: React.FC = () => {
  return (
    <>
      <Introduction />
      <Opportunities />
      <Products stars={Stars} leftArrow={LeftArrow} rightArrow={RightArrow} />
      <Ratings stars={Stars} leftArrow={LeftArrow} rightArrow={RightArrow} />
      <Faq stars={Stars} leftArrow={LeftArrow} rightArrow={RightArrow} />
    </>
  );
};

export default Home;
