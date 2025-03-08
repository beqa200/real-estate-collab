import Introduction from "../components/Introduction";
import Opportunities from "../components/Opportunities";
import Products from "../components/Products";
import Ratings from "../components/Ratings";

const Home: React.FC = () => {
  return (
    <>
      <Introduction />
      <Opportunities />
      <Products />
      <Ratings />
    </>
  );
};

export default Home;
