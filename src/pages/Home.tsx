import Introduction from "../components/home/Introduction";
import Opportunities from "../components/home/Opportunities";
import Products from "../components/home/Products";
import Ratings from "../components/home/Ratings";
import Stars from "../images/home/stars.png";
import LeftArrow from "../images/home/arrow-left.png";
import RightArrow from "../images/home/arrow-right.png";
import Faq from "../components/home/Faq";
import Suggestion from "../components/home/Suggestion";

const Home: React.FC = () => {
  return (
    <>
      <Introduction />
      <Opportunities />
      <Products stars={Stars} leftArrow={LeftArrow} rightArrow={RightArrow} />
      <Ratings stars={Stars} leftArrow={LeftArrow} rightArrow={RightArrow} />
      <Faq stars={Stars} leftArrow={LeftArrow} rightArrow={RightArrow} />
      <Suggestion />
    </>
  );
};

export default Home;
