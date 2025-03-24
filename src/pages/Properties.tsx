import FindPropertyAd from "../components/properties/FindPropertyAd";
import Filter from "../components/properties/Filter";
import ResultProducts from "../components/properties/ResultProducts";
import Stars from "../images/home/stars.png";
import SendMsg from "../components/properties/SendMsg";
import Suggestion from "../components/home/Suggestion";
import { useState } from "react";

const Properties: React.FC = () => {
  const [pageCounter, setPageCounter] = useState<number>(1);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth >= 1440
  );
  const [isLargestScreen, setIsLargestScreen] = useState<boolean>(
    window.innerWidth >= 1920
  );
  return (
    <>
      <FindPropertyAd />
      <Filter />
      <ResultProducts
        stars={Stars}
        isLargeScreen={isLargeScreen}
        setIsLargeScreen={setIsLargeScreen}
        isLargestScreen={isLargestScreen}
        setIsLargestScreen={setIsLargestScreen}
      />
      <SendMsg stars={Stars} />
      <div className="max-w-[50rem] mx-auto tablet:max-w-[280rem]">
        <Suggestion
          isLargeScreen={isLargeScreen}
          setIsLargeScreen={setIsLargeScreen}
          isLargestScreen={isLargestScreen}
          setIsLargestScreen={setIsLargestScreen}
        />
      </div>
    </>
  );
};

export default Properties;
