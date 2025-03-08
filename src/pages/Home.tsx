import Introduction from "../components/Introduction";
import Opportunities from "../components/Opportunities";
import Products from "../components/Products";
import Ratings from "../components/Ratings";
import Stars from "../images/home/stars.png";

const Home: React.FC = () => {
  return (
    <>
      <Introduction />
      <Opportunities />
      <Products stars={Stars} />
      <Ratings stars={Stars} />
    </>
  );
};

export default Home;
