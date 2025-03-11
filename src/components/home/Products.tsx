import TemporaryImg from "../../images/home/introduction.png";
import BedroomImg from "../../images/home/bedroom.png";
import BathroomImg from "../../images/home/bathroom.png";
import BuildingImg from "../../images/home/building.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

import "swiper/swiper-bundle.css";

const Products: React.FC<{
  stars: string;
  leftArrow: string;
  rightArrow: string;
}> = ({ stars, leftArrow, rightArrow }) => {
  const swiperRef: any = useRef(null);

  return (
    <div className="w-[95.5%] mx-auto mt-[6.1rem] max-w-[50rem] xl:max-w-[280rem] xl:relative">
      <img src={stars} alt="Stars" />
      <h3 className="title xl:text-[3.8rem]">Featured Properties</h3>
      <p className="about mt-[0.6rem] xl:text-[1.6rem] xl:max-w-[60%] xl:mt-[1rem]">
        Explore our handpicked selection of featured properties. Each listing
        offers a glimpse into exceptional homes and investments available
        through Estatein.
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <div
            className="mt-[4rem] p-[2.4rem] rounded-[1.2rem] bg-[#141414] border-1 border-[#262626]
                      xl:mt-[6rem]"
          >
            <img src={TemporaryImg} alt="Home" className="w-full" />
            <h5 className="title text-[1.8rem] mt-[1.6rem] xl:text-[2rem] xl:mt-[2rem]">
              Rustic Retreat Cottage
            </h5>
            <p className="about mt-[0.2rem] xl:text-[1.6rem] xl:mt-[0.4rem]">
              An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
              community...
              <span className="text-white underline">Read More</span>
            </p>
            <div className="flex gap-[0.6rem] flex-wrap mt-[2rem]">
              <div className="feature-container">
                <img src={BedroomImg} alt="Bedroom" />
                <span className="feature-text">4-Bedroom</span>
              </div>
              <div className="feature-container">
                <img src={BathroomImg} alt="Bathroom" />
                <span className="feature-text">3-Bathroom</span>
              </div>
              <div className="feature-container">
                <img src={BuildingImg} alt="Building" />
                <span className="feature-text">Villa</span>
              </div>
            </div>
            <div className="flex justify-between mt-[2rem]">
              <div>
                <span className="about">Price</span>
                <p className="title text-[1.8rem] xl:text-[2rem]">$550.000</p>
              </div>
              <button
                className="w-[20.2rem] h-[4.9rem] rounded-[8px] bg-[#703bf7] 
                      text-[1.4rem] font-medium text-white"
              >
                View Property Details
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-[4rem] p-[2.4rem] rounded-[1.2rem] bg-[#141414] border-1 border-[#262626]">
            <img src={TemporaryImg} alt="Home" />
            <h5 className="title text-[1.8rem] mt-[1.6rem]">
              Rustic Retreat Cottage
            </h5>
            <p className="about mt-[0.2rem]">
              An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
              community...
              <span className="text-white underline">Read More</span>
            </p>
            <div className="flex gap-[0.6rem] flex-wrap mt-[2rem]">
              <div className="feature-container">
                <img src={BedroomImg} alt="Bedroom" />
                <span className="feature-text">4-Bedroom</span>
              </div>
              <div className="feature-container">
                <img src={BathroomImg} alt="Bathroom" />
                <span className="feature-text">3-Bathroom</span>
              </div>
              <div className="feature-container">
                <img src={BuildingImg} alt="Building" />
                <span className="feature-text">Villa</span>
              </div>
            </div>
            <div className="flex justify-between mt-[2rem]">
              <div>
                <span className="about">Price</span>
                <p className="title text-[1.8rem]">$550.000</p>
              </div>
              <button
                className="w-[20.2rem] h-[4.9rem] rounded-[8px] bg-[#703bf7] 
                      text-[1.4rem] font-medium text-white"
              >
                View Property Details
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-[4rem] p-[2.4rem] rounded-[1.2rem] bg-[#141414] border-1 border-[#262626]">
            <img src={TemporaryImg} alt="Home" />
            <h5 className="title text-[1.8rem] mt-[1.6rem]">
              Rustic Retreat Cottage
            </h5>
            <p className="about mt-[0.2rem]">
              An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
              community...
              <span className="text-white underline">Read More</span>
            </p>
            <div className="flex gap-[0.6rem] flex-wrap mt-[2rem]">
              <div className="feature-container">
                <img src={BedroomImg} alt="Bedroom" />
                <span className="feature-text">4-Bedroom</span>
              </div>
              <div className="feature-container">
                <img src={BathroomImg} alt="Bathroom" />
                <span className="feature-text">3-Bathroom</span>
              </div>
              <div className="feature-container">
                <img src={BuildingImg} alt="Building" />
                <span className="feature-text">Villa</span>
              </div>
            </div>
            <div className="flex justify-between mt-[2rem]">
              <div>
                <span className="about">Price</span>
                <p className="title text-[1.8rem]">$550.000</p>
              </div>
              <button
                className="w-[20.2rem] h-[4.9rem] rounded-[8px] bg-[#703bf7] 
                      text-[1.4rem] font-medium text-white"
              >
                View Property Details
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="after-box flex">
        <button className="after-box-btn xl:absolute xl:top-[7.5rem] xl:right-0">
          View All Properties
        </button>
        <div>
          <div className="flex items-baseline gap-[1rem]">
            <div
              className="arrow-container xl:absolute xl:right-21"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={leftArrow} alt="Left arrow" />
            </div>
            <p className="about xl:text-[1.6rem] xl:mt-0">
              <span className="text-white">01</span> of <span>60</span>
            </p>
            <div
              className="arrow-container xl:absolute xl:right-0"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={rightArrow} alt="right arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
