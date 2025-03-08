import TemporaryImg from "../images/home/introduction.png";
import BedroomImg from "../images/home/bedroom.png";
import BathroomImg from "../images/home/bathroom.png";
import BuildingImg from "../images/home/building.png";
import Stars from "../images/home/stars.png";
import LeftArrow from "../images/home/arrow-left.png";
import RightArrow from "../images/home/arrow-right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

import "swiper/swiper-bundle.css";

const Products: React.FC = () => {
  const swiperRef: any = useRef(null);

  return (
    <div className="w-[95.5%] mx-auto mt-[6.1rem]">
      <img src={Stars} alt="Stars" />
      <h3 className="title">Featured Properties</h3>
      <p className="about mt-[0.6rem]">
        Explore our handpicked selection of featured properties. Each listing
        offers a glimpse into exceptional homes and investments available
        through Estatein.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
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
      <div className="flex justify-between border-t-1 border-t-[#262626] py-[1.6rem] mt-[3rem]">
        <button
          className="w-[15.5rem] py-[1.4rem] rounded-[8px] bg-[#1a1a1a] border-1 border-[#262626] 
                   text-[1.4rem] font-semibold leading-[1.5] text-white"
        >
          View All Properties
        </button>
        <div>
          <div className="flex items-baseline gap-[1rem]">
            <div
              className="arrow-container"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={LeftArrow} alt="Left arrow" />
            </div>
            <p className="about">
              <span className="text-white">01</span> of <span>60</span>
            </p>
            <div
              className="arrow-container"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={RightArrow} alt="right arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
