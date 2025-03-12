import Introduction from "../components/home/Introduction";
import Opportunities from "../components/home/Opportunities";
import Products from "../components/home/Products";
import Ratings from "../components/home/Ratings";
import Stars from "../images/home/stars.png";
import LeftArrow from "../images/home/arrow-left.png";
import RightArrow from "../images/home/arrow-right.png";
import Faq from "../components/home/Faq";
import Suggestion from "../components/home/Suggestion";
import { useState } from "react";

const Home: React.FC = () => {
  const [pageCounter, setPageCounter] = useState<number>(1);
  const [totalSlides, setTotalSlides] = useState<number>(0);

  return (
    <>
      <Introduction />
      <Opportunities />
      <Products
        stars={Stars}
        leftArrow={LeftArrow}
        rightArrow={RightArrow}
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
        totalSlides={totalSlides}
        setTotalSlides={setTotalSlides}
      />
      <Ratings
        stars={Stars}
        leftArrow={LeftArrow}
        rightArrow={RightArrow}
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
        totalSlides={totalSlides}
        setTotalSlides={setTotalSlides}
      />
      <Faq
        stars={Stars}
        leftArrow={LeftArrow}
        rightArrow={RightArrow}
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
        totalSlides={totalSlides}
        setTotalSlides={setTotalSlides}
      />
      <Suggestion />
    </>
  );
};

export default Home;
