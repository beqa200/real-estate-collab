import React from "react";

const FindPropertyAd: React.FC = () => {
  return (
    <div
      className="custom-prop-container bg-custom-gradient mx-auto max-w-[50rem]
                tablet:text-[3.8rem] tablet:max-w-[280rem] tablet:pt-[10rem] tablet:pr-[20rem] tablet:pb-[13rem] pl-[8rem]"
    >
      <h4
        className="text-[2.8rem] font-semibold leading-[1.5] text-white
                  tablet:text-[3.8rem]"
      >
        Find Your Dream Property
      </h4>
      <p
        className="text-[1.4rem] font-medium leading-[1.5] text-[#999] mt-[1rem]
                  tablet:text-[1.6rem]"
      >
        Welcome to Estatein, where your dream property awaits in every corner of
        our beautiful world. Explore our curated selection of properties, each
        offering a unique story and a chance to redefine your life. With
        categories to suit every dreamer, your journey
      </p>
    </div>
  );
};

export default FindPropertyAd;
