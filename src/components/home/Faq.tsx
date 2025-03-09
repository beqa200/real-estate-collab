import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

const Faq: React.FC<{
  stars: string;
  leftArrow: string;
  rightArrow: string;
}> = ({ stars, leftArrow, rightArrow }) => {
  const swiperRef: any = useRef(null);

  return (
    <div className="w-[95.5%] mx-auto mt-[6.1rem]">
      <img src={stars} alt="Stars" />
      <h3 className="title">Frequently Asked Questions</h3>
      <p className="about mt-[0.6rem]">
        Find answers to common questions about Estatein's services, property
        listings, and the real estate process. We're here to provide clarity and
        assist you every step of the way.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <div className="mt-[4rem] p-[3rem] rounded-[1rem] bg-[#141414] border-1 border-[#262626]">
            <div>
              <h6 className="title text-[1.8rem] mt-[2.4rem]">
                How do I search for properties on Estatein?
              </h6>
              <p className="title text-[1.4rem] font-medium mt-[2rem] text-[#999]">
                Learn how to use our user-friendly search tools to find
                properties that match your criteria.
              </p>
              <button
                className="w-full h-[4.6rem] rounded-[8px] bg-[#1a1a1a] border-1 border-[#262626]
                      text-[1.4rem] font-medium leading-[1.31] teacking-[-0.08px] text-white mt-[2rem]"
              >
                Read More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-[4rem] p-[3rem] rounded-[1rem] bg-[#141414] border-1 border-[#262626]">
            <div>
              <h6 className="title text-[1.8rem] mt-[2.4rem]">
                How do I search for properties on Estatein?
              </h6>
              <p className="title text-[1.4rem] font-medium mt-[2rem] text-[#999]">
                Learn how to use our user-friendly search tools to find
                properties that match your criteria.
              </p>
              <button
                className="w-full h-[4.6rem] rounded-[8px] bg-[#1a1a1a] border-1 border-[#262626]
                      text-[1.4rem] font-medium leading-[1.31] teacking-[-0.08px] text-white mt-[2rem]"
              >
                Read More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-[4rem] p-[3rem] rounded-[1rem] bg-[#141414] border-1 border-[#262626]">
            <div>
              <h6 className="title text-[1.8rem] mt-[2.4rem]">
                How do I search for properties on Estatein?
              </h6>
              <p className="title text-[1.4rem] font-medium mt-[2rem] text-[#999]">
                Learn how to use our user-friendly search tools to find
                properties that match your criteria.
              </p>
              <button
                className="w-full h-[4.6rem] rounded-[8px] bg-[#1a1a1a] border-1 border-[#262626]
                      text-[1.4rem] font-medium leading-[1.31] teacking-[-0.08px] text-white mt-[2rem]"
              >
                Read More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="after-box">
        <button className="after-box-btn">View All FAQ’s</button>
        <div>
          <div className="flex items-baseline gap-[1rem]">
            <div
              className="arrow-container"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={leftArrow} alt="Left arrow" />
            </div>
            <p className="about">
              <span className="text-white">01</span> of <span>60</span>
            </p>
            <div
              className="arrow-container"
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
