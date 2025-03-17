import BedroomImg from "../../images/home/bedroom.png";
import BathroomImg from "../../images/home/bathroom.png";
import BuildingImg from "../../images/home/building.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { IProduct } from "../../types/types";

import "swiper/swiper-bundle.css";

const Products: React.FC<{
  stars: string;
  leftArrow: string;
  rightArrow: string;
  pageCounter: number;
  setPageCounter: React.Dispatch<React.SetStateAction<number>>;
  isLargeScreen: boolean;
  setIsLargeScreen: React.Dispatch<React.SetStateAction<boolean>>;
  isLargestScreen: boolean;
  setIsLargestScreen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  stars,
  leftArrow,
  rightArrow,
  pageCounter,
  setPageCounter,
  isLargeScreen,
  setIsLargeScreen,
  isLargestScreen,
  setIsLargestScreen,
}) => {
  const swiperRef: any = useRef(null);

  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    axios
      .get("http://104.248.242.53:8000/property/property/")
      .then((res) => {
        setProducts(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

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
      className="w-[95.5%] mx-auto mt-[6.1rem] max-w-[50rem] tablet:max-w-[280rem] tablet:relative tablet:mt-[9rem]
                desktop:w-[83.1%] desktop:mt-[11rem]"
    >
      <img src={stars} alt="Stars" />
      <h3 className="title tablet:text-[3.8rem] desktop:text-[4.8rem]">
        Featured Properties
      </h3>
      <p
        className="about mt-[0.6rem] tablet:text-[1.6rem] tablet:max-w-[60%] tablet:mt-[1rem] desktop:text-[1.8rem]
                  desktop:mt-[1.4rem]"
      >
        Explore our handpicked selection of featured properties. Each listing
        offers a glimpse into exceptional homes and investments available
        through Estatein.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
          1440: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setPageCounter(swiper.activeIndex + 1)}
      >
        {products?.map((item: IProduct) => (
          <SwiperSlide>
            <div
              key={item.title}
              className="mt-[4rem] p-[2.4rem] rounded-[1.2rem] bg-[#141414] border-1 border-[#262626]
                      tablet:p-[3rem] tablet:mt-[6rem] desktop:p-[4rem] desktop:mt-[8rem]"
            >
              <img
                src={item.images[0].image}
                alt="Home"
                className="w-full rounded-[1rem] h-[21rem] object-cover tablet:h-[25.5rem]"
              />
              <h5
                className="title text-[1.8rem] mt-[1.6rem] tablet:text-[2rem] tablet:mt-[2rem]
                          desktop:text-[2.4rem] desktop:mt-[3rem]"
              >
                {item.title}
              </h5>
              <p className="about mt-[0.2rem] tablet:text-[1.6rem] tablet:mt-[0.4rem] desktop:text-[2.4rem] destkop:mt-[0.6rem]">
                {item.description}
                <span className="text-white underline">Read More</span>
              </p>
              <div className="flex gap-[0.6rem] flex-wrap mt-[2rem] desktop:gap-[1rem] desktop:mt-[3rem]">
                <div className="feature-container">
                  <img src={BedroomImg} alt="Bedroom" />
                  <span className="feature-text">{item.bedrooms}-Bedroom</span>
                </div>
                <div className="feature-container">
                  <img src={BathroomImg} alt="Bathroom" />
                  <span className="feature-text">
                    {item.bathrooms}-Bathroom
                  </span>
                </div>
                <div className="feature-container">
                  <img src={BuildingImg} alt="Building" />
                  <span className="feature-text">Villa</span>
                </div>
              </div>
              <div className="flex justify-between mt-[2rem] desktop:mt-[3rem]">
                <div>
                  <span className="about desktop:text-[1.8rem]">Price</span>
                  <p className="title text-[1.8rem] tablet:text-[2rem] desktop:text-[2.4rem] desktop:mt-[0.2rem]">
                    ${item.price}
                  </p>
                </div>
                <button
                  className="w-[20.2rem] h-[4.9rem] rounded-[8px] bg-[#703bf7] 
                      text-[1.4rem] font-medium text-white desktop:h-[6.3rem] desktop:rounded-[1rem] desktop:text-[1.8rem]"
                >
                  View Property Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="after-box flex">
        <button className="after-box-btn tablet:absolute tablet:top-[7.5rem] tablet:right-0 desktop:top-[8.2rem]">
          View All Properties
        </button>
        <div>
          <div className="flex items-baseline gap-[1rem] desktop:p-[2rem]">
            <div
              className={`arrow-container tablet:absolute tablet:right-21 desktop:right-28 ${
                pageCounter !== 1 ? "bg-[#262626]" : "bg-[#1a1a1a]"
              }`}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img
                src={leftArrow}
                alt="Left arrow"
                className={`${
                  pageCounter !== 1
                    ? "grayscale brightness-200"
                    : "filter invert-[50%] brightness-[50%]"
                } `}
              />
            </div>
            <p className="about tablet:text-[1.6rem] tablet:mt-0 desktop:text-[2rem] ">
              <span className="text-white">{pageCounter}</span> of{" "}
              <span>
                {!isLargeScreen && !isLargestScreen && products
                  ? products.length
                  : isLargeScreen && products
                  ? products?.length - 2
                  : null}
              </span>
            </p>
            <div
              className={`arrow-container tablet:absolute tablet:right-0 ${
                !isLargeScreen &&
                !isLargestScreen &&
                products &&
                pageCounter !== products.length
                  ? "bg-[#262626]"
                  : isLargeScreen &&
                    products &&
                    pageCounter !== products.length - 2
                  ? "bg-[#262626]"
                  : "bg-[#1a1a1a]"
              }`}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img
                src={rightArrow}
                alt="right arrow"
                className={` tablet:w-[1.68rem] tablet:h-[1.44rem] desktop:w-[2.1rem] desktop:h-[1.8rem] ${
                  !isLargeScreen &&
                  !isLargestScreen &&
                  products &&
                  pageCounter !== products.length
                    ? "grayscale brightness-200"
                    : isLargeScreen &&
                      products &&
                      pageCounter !== products?.length - 2
                    ? "grayscale brightness-200"
                    : "filter invert-[50%] brightness-[50%]"
                } `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
