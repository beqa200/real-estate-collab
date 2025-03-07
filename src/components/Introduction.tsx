import IntroductionImg from "../images/introduction/introduction.png";
import RountAd from "../images/Introduction/round-ad.png";

const Introduction: React.FC = () => {
  return (
    <div className="w-[95.5%] mx-auto mt-[4rem]">
      <div className="relative">
        <img src={IntroductionImg} alt="Introduction image" />
        <div className="absolute bottom-[-4rem]">
          <img src={RountAd} alt="Ad" />
        </div>
      </div>
      <div className="mt-[5.6rem]">
        <div>
          <h1 className="text-[2.8rem] font-semibold leading-[1.2] text-white">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="text-[1.4rem] font-medium leading-[1.5] text-[#999] mt-[1.6rem]">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>
        <div className="flex flex-col gap-[1.6rem] mt-[4rem]">
          <button className="w-full h-[4.9rem] rounded-[8px] bg-transparent border-solid border-[0.1rem] border-[#262626] button-text">
            Learn More
          </button>
          <button className="w-full h-[4.9rem] rounded-[8px] bg-[#703bf7] button-text">
            Browse Properties
          </button>
        </div>
        <section className="flex flex-wrap gap-[1.2rem] mt-[4rem]">
          <div className="flex w-full gap-[1.2rem]">
            <div className="result-container">
              <p className="people-amount">200+</p>
              <span className="result">Happy Customers</span>
            </div>
            <div className="result-container">
              <p className="people-amount">10+</p>
              <span className="result">Properties For Clients</span>
            </div>
          </div>
          <div className="result-container">
            <p className="people-amount">16+</p>
            <span className="result">Years of Experience</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Introduction;
