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
  totalSlides: number;
  setTotalSlides: React.Dispatch<React.SetStateAction<number>>;
}> = ({
  stars,
  leftArrow,
  rightArrow,
  pageCounter,
  setPageCounter,
  totalSlides,
  setTotalSlides,
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

  return (
    <div className="w-[95.5%] mx-auto mt-[6.1rem] max-w-[50rem] tablet:max-w-[280rem] tablet:relative tablet:mt-[9rem]">
      <img src={stars} alt="Stars" />
      <h3 className="title tablet:text-[3.8rem]">Featured Properties</h3>
      <p className="about mt-[0.6rem] tablet:text-[1.6rem] tablet:max-w-[60%] tablet:mt-[1rem]">
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
                      tablet:p-[3rem] tablet:mt-[6rem]"
            >
              <img
                // src={item.images[key].image}
                alt="Home"
                className="w-full rounded-[1rem] h-[21rem] object-cover tablet:h-[25.5rem]"
              />
              <h5 className="title text-[1.8rem] mt-[1.6rem] tablet:text-[2rem] tablet:mt-[2rem]">
                {item.title}
              </h5>
              <p className="about mt-[0.2rem] tablet:text-[1.6rem] tablet:mt-[0.4rem]">
                {item.description}
                <span className="text-white underline">Read More</span>
              </p>
              <div className="flex gap-[0.6rem] flex-wrap mt-[2rem]">
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
              <div className="flex justify-between mt-[2rem]">
                <div>
                  <span className="about">Price</span>
                  <p className="title text-[1.8rem] tablet:text-[2rem]">
                    ${item.price}
                  </p>
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
        ))}
      </Swiper>
      <div className="after-box flex">
        <button className="after-box-btn tablet:absolute tablet:top-[7.5rem] tablet:right-0">
          View All Properties
        </button>
        <div>
          <div className="flex items-baseline gap-[1rem]">
            <div
              className="arrow-container tablet:absolute tablet:right-21"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={leftArrow} alt="Left arrow" />
            </div>
            <p className="about tablet:text-[1.6rem] tablet:mt-0">
              <span className="text-white">{pageCounter}</span> of{" "}
              <span>{products.length}</span>
            </p>
            <div
              className="arrow-container tablet:absolute tablet:right-0"
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
