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
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth >= 1440
  );
  const [isLargestScreen, setIsLargestScreen] = useState<boolean>(
    window.innerWidth >= 1920
  );

  return (
    <>
      <Introduction
        isLargeScreen={isLargeScreen}
        setIsLargeScreen={setIsLargeScreen}
        isLargestScreen={isLargestScreen}
        setIsLargestScreen={setIsLargestScreen}
      />
      <Opportunities />
      <Products
        stars={Stars}
        leftArrow={LeftArrow}
        rightArrow={RightArrow}
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
        isLargeScreen={isLargeScreen}
        setIsLargeScreen={setIsLargeScreen}
        isLargestScreen={isLargestScreen}
        setIsLargestScreen={setIsLargestScreen}
      />
      <Ratings
        stars={Stars}
        leftArrow={LeftArrow}
        rightArrow={RightArrow}
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
        isLargeScreen={isLargeScreen}
        setIsLargeScreen={setIsLargeScreen}
        isLargestScreen={isLargestScreen}
        setIsLargestScreen={setIsLargestScreen}
      />
      <Faq
        stars={Stars}
        leftArrow={LeftArrow}
        rightArrow={RightArrow}
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
        isLargeScreen={isLargeScreen}
        setIsLargeScreen={setIsLargeScreen}
        isLargestScreen={isLargestScreen}
        setIsLargestScreen={setIsLargestScreen}
      />
      <Suggestion />
    </>
  );
};

export default Home;
