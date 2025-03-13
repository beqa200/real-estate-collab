import Star from "../../images/home/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import { IRating } from "../../types/types";
import axios from "axios";

const Ratings: React.FC<{
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

  const [ratings, setRatings] = useState<IRating[] | undefined>();

  useEffect(() => {
    axios
      .get("http://104.248.242.53:8000/home/testimonal/")
      .then((res) => setRatings(res.data.results))
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
      className="w-[95.5%] mx-auto mt-[7.1rem] max-w-[50rem] tablet:max-w-[280rem] tablet:relative tablet:mt-[11rem]
                desktop:w-[83.1%] desktop:mt-[11rem]"
    >
      <img src={stars} alt="Stars" />
      <h3 className="title tablet:text-[3.8rem] desktop:text-[4.8rem] ">
        What Our Clients Says
      </h3>
      <p
        className="about mt-[0.6rem] tablet:text-[1.6rem] tablet:mt-[1rem] desktop:text-[1.8rem]
                  desktop:mt-[1.4rem]"
      >
        Read the success stories and heartfelt testimonials from our valued
        clients. Discover why they chose Estatein for their real estate needs.
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
        {ratings?.map((item: IRating) => (
          <SwiperSlide key={item.id}>
            <div
              className="mt-[4rem] p-[3rem] rounded-[1rem] bg-[#141414] border-1 border-[#262626]
                      tablet:p-[4rem] tablet:mt-[6rem] desktop:p-[5rem] desktop:mt-[8rem]"
            >
              <div>
                <div>
                  <div className="flex items-center gap-[0.8rem] desktop:gap-[1rem]">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <div
                        className="tablet:w-[3.8rem] tablet:h-[3.6rem]
                                  desktop:w-[4.4rem] desktop:h-[4.4rem] bg-[#1a1a1a] border-1 bordder-[#262626]
                                  rounded-[50%] flex items-center justify-center"
                      >
                        <img key={index} src={Star} alt="Star" />
                      </div>
                    ))}
                  </div>
                  <h6
                    className="title text-[1.8rem] mt-[2.4rem] tablet:text-[2rem] tablet:mt-[3rem]
                              desktop:text-[2.4rem] desktop:mt-[4rem]"
                  >
                    {item.title}
                  </h6>
                  <p
                    className="title text-[1.4rem] font-medium mt-[0.6rem] tablet:text-[1.6rem] tablet:mt-[1rem]
                              desktop:text-[1.8rem] desktop:mt-[1.4rem]"
                  >
                    {item.testimonial}
                  </p>
                </div>
                <div className="flex items-center gap-[1rem] mt-[2.4rem] tablet:mt-[3rem] desktop:mt-[4rem] desktop:gap-[1.2rem]">
                  <div className="flex">
                    <img
                      src={item.image}
                      alt="customer"
                      className="w-[5rem] h-[5rem] rounded-[50%] object-cover desktop:w-[6rem] desktop:h-[6rem]"
                    />
                  </div>
                  <div>
                    <p className="title text-[1.6rem] font-medium tablet:text-[1.8rem] desktop:text-[2rem]">
                      {item.name}
                    </p>
                    <p className="title text-[1.4rem] font-medium text-[#999] tablet:text-[1.6rem] desktop:text-[1.8rem]">
                      {item.loaction}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="after-box">
        <button className="after-box-btn tablet:absolute tablet:top-[5rem] tablet:right-0 desktop:top-[5.3rem]">
          View All Testimonials
        </button>
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
              className={` ${
                pageCounter !== 1
                  ? "grayscale brightness-200"
                  : "filter invert-[50%] brightness-[50%]"
              } `}
            />
          </div>
          <p className="about tablet:text-[1.6rem] tablet:mt-0 desktop:text-[2rem]">
            <span className="text-white">{pageCounter}</span> of{" "}
            <span>
              {!isLargeScreen && !isLargestScreen && ratings
                ? ratings.length
                : isLargeScreen && ratings
                ? ratings?.length - 2
                : null}
            </span>
          </p>
          <div
            className={`arrow-container tablet:absolute tablet:right-0 ${
              !isLargeScreen &&
              !isLargestScreen &&
              ratings &&
              pageCounter !== ratings.length
                ? "bg-[#262626]"
                : isLargeScreen && ratings && pageCounter !== ratings.length - 2
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
                ratings &&
                pageCounter !== ratings.length
                  ? "grayscale brightness-200"
                  : isLargeScreen &&
                    ratings &&
                    pageCounter !== ratings?.length - 2
                  ? "grayscale brightness-200"
                  : "filter invert-[50%] brightness-[50%]"
              } `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
