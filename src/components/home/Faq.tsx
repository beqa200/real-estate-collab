import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { IFaq } from "../../types/types";

const Faq: React.FC<{
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

  const [faq, setFaq] = useState<IFaq[]>();
  useEffect(() => {
    axios
      .get("http://104.248.242.53:8000/home/faq/")
      .then((res) => setFaq(res.data.results))
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

  const [readMore, setReadMore] = useState<{ [key: number]: boolean }>({});

  return (
    <div
      className="w-[95.5%] mx-auto mt-[6.1rem] max-w-[50rem] tablet:max-w-[280rem] tablet:mt-[11rem] tablet:relative
                desktop:w-[83.1%] desktop:mt-[11rem]"
    >
      <img src={stars} alt="Stars" />
      <h3 className="title tablet:text-[3.8rem] desktop:text-[4.8rem]">
        Frequently Asked Questions
      </h3>
      <p
        className="about mt-[0.6rem] tablet:text-[1.6rem] tablet:mt-[1rem] tablet:w-[60%] desktop:text-[1.8rem]
                  desktop:mt-[1.4rem]"
      >
        Find answers to common questions about Estatein's services, property
        listings, and the real estate process. We're here to provide clarity and
        assist you every step of the way.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
          1440: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setPageCounter(swiper.activeIndex + 1)}
      >
        {faq?.map((item: IFaq) => (
          <SwiperSlide key={item.id}>
            <div
              className="mt-[4rem] p-[3rem] rounded-[1rem] bg-[#141414] border-1 border-[#262626]
                      tablet:p-[4rem] tablet:mt-[6rem] desktop:p-[5rem] desktop:mt-[8rem]"
            >
              <div>
                <h6 className="title text-[1.8rem] mt-[2.4rem] tablet:text-[2rem] desktop:text-[2.4rem]">
                  {item.question}
                </h6>
                <p
                  className="title text-[1.4rem] font-medium mt-[2rem] text-[#999] tablet:text-[1.6rem] tablet:mt-[2.4rem]
                          tablet:tracking-[-0.1px] desktop:text-[1.8rem] desktop:tracking-[-0.11px] desktop:mt-[3rem]"
                >
                  {!readMore[item.id]
                    ? item.answer.split(".").slice(0, 1).join(".") + "."
                    : item.answer}
                </p>
                <button
                  onClick={() =>
                    setReadMore((prev) => ({
                      ...prev,
                      [item.id]: !prev[item.id],
                    }))
                  }
                  className="w-full h-[4.6rem] rounded-[8px] bg-[#1a1a1a] border-1 border-[#262626]
                      text-[1.4rem] font-medium leading-[1.31] tracking-[-0.08px] text-white mt-[2rem]
                      tablet:w-[10.7rem] tablet:mt-[2.4rem] desktop:w-[13.4rem] desktop:rounded-[1rem] desktop:mt-[3rem]
                      desktop:text-[1.8rem] desktop:tracking-[-0.11px]"
                >
                  {!readMore[item.id] ? "Read More" : "Read Less"}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="after-box">
        <button className="after-box-btn tablet:absolute tablet:top-[5rem] tablet:right-0 desktop:top-[8.3rem]">
          View All FAQ’s
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
            <p className="about tablet:text-[1.6rem] tablet:mt-0 desktop:text-[2rem]">
              <span className="text-white">{pageCounter}</span> of{" "}
              <span>
                {!isLargeScreen && !isLargestScreen && faq
                  ? faq.length
                  : isLargeScreen && faq
                  ? faq?.length - 2
                  : null}
              </span>
            </p>
            <div
              className={`arrow-container tablet:absolute tablet:right-0 ${
                !isLargeScreen &&
                !isLargestScreen &&
                faq &&
                pageCounter !== faq.length
                  ? "bg-[#262626]"
                  : isLargeScreen && faq && pageCounter !== faq.length - 2
                  ? "bg-[#262626]"
                  : "bg-[#1a1a1a]"
              }`}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img
                src={rightArrow}
                alt="right arrow"
                className={`tablet:w-[1.68rem] tablet:h-[1.44rem] desktop:w-[2.1rem] desktop:h-[1.8rem] ${
                  !isLargeScreen &&
                  !isLargestScreen &&
                  faq &&
                  pageCounter !== faq.length
                    ? "grayscale brightness-200"
                    : isLargeScreen && faq && pageCounter !== faq.length - 2
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

export default Faq;
