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

  const [faq, setFaq] = useState<IFaq[]>();
  useEffect(() => {
    axios
      .get("http://104.248.242.53:8000/home/faq/")
      .then((res) => setFaq(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  // console.log(swiperRef);

  const [readMore, setReadMore] = useState<{ [key: number]: boolean }>({});

  return (
    <div className="w-[95.5%] mx-auto mt-[6.1rem] max-w-[50rem] tablet:max-w-[280rem] tablet:mt-[11rem] tablet:relative">
      <img src={stars} alt="Stars" />
      <h3 className="title tablet:text-[3.8rem]">Frequently Asked Questions</h3>
      <p className="about mt-[0.6rem] tablet:text-[1.6rem] tablet:mt-[1rem] tablet:w-[60%]">
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
          setTotalSlides(swiper.slides.length); // Move it here
        }}
        onSlideChange={(swiper) => setPageCounter(swiper.activeIndex + 1)}
      >
        {faq?.map((item: IFaq) => (
          <SwiperSlide key={item.id}>
            <div
              className="mt-[4rem] p-[3rem] rounded-[1rem] bg-[#141414] border-1 border-[#262626]
                      tablet:p-[4rem] tablet:mt-[6rem]"
            >
              <div>
                <h6 className="title text-[1.8rem] mt-[2.4rem] tablet:text-[2rem]">
                  {item.question}
                </h6>
                <p
                  className="title text-[1.4rem] font-medium mt-[2rem] text-[#999] tablet:text-[1.6rem] tablet:mt-[2.4rem]
                          tablet:tracking-[-0.1px]"
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
                      text-[1.4rem] font-medium leading-[1.31] teacking-[-0.08px] text-white mt-[2rem]
                      tablet:mt-[2.4rem]"
                >
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="after-box">
        <button className="after-box-btn tablet:absolute tablet:top-[5rem] tablet:right-0">
          View All FAQ’s
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
              <span>{totalSlides}</span>
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

export default Faq;
