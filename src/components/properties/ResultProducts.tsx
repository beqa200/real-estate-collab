import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { IProduct } from "../../types/types";
import { useState, useEffect } from "react";
import BedroomImg from "../../images/home/bedroom.png";
import BathroomImg from "../../images/home/bathroom.png";
import BuildingImg from "../../images/home/building.png";
import LeftArrow from "../../images/home/arrow-left.png";
import RightArrow from "../../images/home/arrow-right.png";

const ResultProducts: React.FC<{ stars: string }> = ({ stars }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    axios
      .get("http://104.248.242.53:8000/property/property/")
      .then((res) => {
        setProducts(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-[91.5%] mx-auto mt-[6.1rem]">
      <img src={stars} alt="Stars" />
      <h3 className="title">Discover a World of Possibilities</h3>
      <p className="about mt-[0.8rem]">
        Our portfolio of properties is as diverse as your dreams. Explore the
        following categories to find the perfect property that resonates with
        your vision of home
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
          1440: {
            slidesPerView: 3,
          },
        }}
        // onSwiper={(swiper) => (swiperRef.current = swiper)}
        // onSlideChange={(swiper) => setPageCounter(swiper.activeIndex + 1)}
      >
        {products?.map((item: IProduct) => (
          <SwiperSlide>
            <div
              key={item.id}
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
                    ${parseInt(item.price)}
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
      <div className="after-box border-0 p-0">
        <div className="flex items-baseline w-full justify-between">
          <div
            className={`arrow-container tablet:absolute tablet:right-21 desktop:right-28 `}
            //   onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src={LeftArrow} alt="Left arrow" className={` `} />
          </div>
          <p className="about tablet:text-[1.6rem] tablet:mt-0 desktop:text-[2rem] ">
            <span className="text-white">1</span> of{" "}
            <span>
              {/* {!isLargeScreen && !isLargestScreen && products
                  ? products.length
                  : isLargeScreen && products
                  ? products?.length - 2
                  : null} */}{" "}
              6
            </span>
          </p>
          <div
            className={`arrow-container tablet:absolute tablet:right-0 `}
            //   onClick={() => swiperRef.current?.slideNext()}
          >
            <img
              src={RightArrow}
              alt="right arrow"
              className={` tablet:w-[1.68rem] tablet:h-[1.44rem] desktop:w-[2.1rem] desktop:h-[1.8rem]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultProducts;
