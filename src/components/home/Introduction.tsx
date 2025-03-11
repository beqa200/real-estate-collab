import IntroductionImg from "../../images/home/introduction.png";
import IntrodutionTabletImg from "../../images/home/tablet/introduction-tablet.png";
import RountAd from "../../images/home/round-ad.png";
import { useState, useEffect } from "react";
import RoundAtTablet from "../../images/home/tablet/round-ad-tablet.png";

const Introduction: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-[95.5%] mx-auto mt-[4rem] flex flex-col items-center max-w-[50rem]
                 xl:max-w-[160rem] xl:flex-row xl:justify-baseline xl:pl-[8rem] xl:pr-0 xl:mt-[0px] xl:gap-[6rem] xl:w-full"
    >
      <div className="relative w-full xl:order-1">
        {!isLargeScreen ? (
          <img src={IntroductionImg} alt="Building" className="w-full" />
        ) : (
          <img src={IntrodutionTabletImg} alt="Building" className="w-full" />
        )}

        <div className="absolute bottom-[-4rem] xl:left-[-6.4rem] xl:top-[9.5rem]">
          {!isLargeScreen ? (
            <img src={RountAd} alt="Ad" className="block xl:hidden" />
          ) : (
            <img src={RoundAtTablet} alt="Ad" />
          )}
        </div>
      </div>
      <div className="mt-[5.6rem] xl:mt-0">
        <div>
          <h1 className="title">Discover Your Dream Property with Estatein</h1>
          <p className="about">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>
        <div className="flex flex-col gap-[1.6rem] mt-[4rem] xl:flex-row xl:mt-[5rem]">
          <button
            className="w-full h-[4.9rem] rounded-[8px] bg-transparent border-solid
                       border-[0.1rem] border-[#262626] button-text
                       xl:w-[11.1rem]"
          >
            Learn More
          </button>
          <button
            className="w-full h-[4.9rem] rounded-[8px] bg-[#703bf7] button-text
                       xl:w-[15.1rem]"
          >
            Browse Properties
          </button>
        </div>
        <section className="flex flex-wrap gap-[1.2rem] mt-[4rem] xl:mt-[5rem] xl:gap-[1.6rem]">
          <div className="flex w-full gap-[1.2rem] xl:w-[64%]">
            <div className="result-container">
              <p className="people-amount">200+</p>
              <span className="result">Happy Customers</span>
            </div>
            <div className="result-container">
              <p className="people-amount">10+</p>
              <span className="result">Properties For Clients</span>
            </div>
          </div>
          <div className="result-container xl:w-[32%]">
            <p className="people-amount">16+</p>
            <span className="result">Years of Experience</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Introduction;
