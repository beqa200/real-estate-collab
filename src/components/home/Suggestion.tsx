import LeftDecoration from "../../images/home/decoration-left.png";
import RightDecoration from "../../images/home/decoration-right.png";
import LeftDecorationDesktop from "../../images/home/desktop/decoration-left-desktop.png";
import RightDecorationDesktop from "../../images/home/desktop/decoration-right-desktop.png";
import { useEffect } from "react";

const Suggestion: React.FC<{
  isLargeScreen: boolean;
  setIsLargeScreen: React.Dispatch<React.SetStateAction<boolean>>;
  isLargestScreen: boolean;
  setIsLargestScreen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  isLargeScreen,
  setIsLargeScreen,
  isLargestScreen,
  setIsLargestScreen,
}) => {
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
      setIsLargestScreen(window.innerWidth >= 1920);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-full py-[5rem] px-[1.6rem] border-y-1 border-y-[#262626] mx-auto mt-[6.4rem] relative overflow-hidden
                max-w-[50rem] tablet:max-w-[280rem] tablet:flex tablet:items-center tablet:justify-between tablet:p-[6rem]
                desktop:py-[10rem] desktop:px-[16.2rem]"
    >
      <div className="z-1 sticky">
        <h3 className="title tablet:text-[3.8rem] desktop:text-[4.8rem]">
          Start Your Real Estate Journey Today
        </h3>
        <p className="about mt-[0.6rem] tablet:mt-[1rem] tablet:w-[70%] desktop: desktop:mt-[1.4rem]">
          Your dream property is just a click away. Whether you're looking for a
          new home, a strategic investment, or expert real estate advice,
          Estatein is here to assist you every step of the way. Take the first
          step towards your real estate goals and explore our available
          properties or get in touch with our team for personalized assistance.
        </p>
      </div>
      <button
        className="w-full h-[4.9rem] rounded-[8px] bg-[#703bf7]
                  text-[1.4rem] font-medium leading-[1.5] text-white mt-[3rem] z-1 sticky
                  tablet:w-[25%] desktop:w-[30%] desktop:h-[6.3rem] desktop:text-[1.8rem]"
      >
        Explore Properties
      </button>
      <div className="absolute top-0 left-0">
        <img
          src={
            !isLargeScreen && !isLargestScreen
              ? LeftDecoration
              : LeftDecorationDesktop
          }
          alt="Decoration"
        />
      </div>
      <div className="absolute right-0 bottom-0">
        <img
          src={
            !isLargeScreen && !isLargestScreen
              ? RightDecoration
              : RightDecorationDesktop
          }
          alt="Decoraiton"
        />
      </div>
      {/* <img src={RightDecoration} alt="Decoration" className="absolute" /> */}
    </div>
  );
};

export default Suggestion;
