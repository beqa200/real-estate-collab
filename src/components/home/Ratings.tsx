import Star from "../images/home/star.png";
import Customer from "../images/home/profile-picture.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

const Ratings: React.FC<{
  stars: string;
  leftArrow: string;
  rightArrow: string;
}> = ({ stars, leftArrow, rightArrow }) => {
  const swiperRef: any = useRef(null);

  return (
    <div className="w-[95.5%] mx-auto mt-[7.1rem]">
      <img src={stars} alt="Stars" />
      <h3 className="title">What Our Clients Says</h3>
      <p className="about mt-[0.6rem]">
        Read the success stories and heartfelt testimonials from our valued
        clients. Discover why they chose Estatein for their real estate needs.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <div className="mt-[4rem] p-[3rem] rounded-[1rem] bg-[#141414] border-1 border-[#262626]">
            <div>
              <div>
                <img src={Star} alt="Star" />
                <h6 className="title text-[1.8rem] mt-[2.4rem]">
                  Exceptional Service!
                </h6>
                <p className="title text-[1.4rem] font-medium mt-[0.6rem]">
                  Our experience with Estatein was outstanding. Their team's
                  dedication and professionalism made finding our dream home a
                  breeze. Highly recommended!
                </p>
              </div>
              <div className="flex items-center gap-[1rem] mt-[2.4rem]">
                <div className="flex">
                  <img src={Customer} alt="customer" />
                </div>
                <div>
                  <p className="title text-[1.6rem] font-medium">Wade Warren</p>
                  <p className="title text-[1.4rem] font-medium text-[#999]">
                    USA, California
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-[4rem] p-[3rem] rounded-[1rem] bg-[#141414] border-1 border-[#262626]">
            <div>
              <div>
                <img src={Star} alt="Star" />
                <h6 className="title text-[1.8rem] mt-[2.4rem]">
                  Exceptional Service!
                </h6>
                <p className="title text-[1.4rem] font-medium mt-[0.6rem]">
                  Our experience with Estatein was outstanding. Their team's
                  dedication and professionalism made finding our dream home a
                  breeze. Highly recommended!
                </p>
              </div>
              <div className="flex items-center gap-[1rem] mt-[2.4rem]">
                <div className="flex">
                  <img src={Customer} alt="customer" />
                </div>
                <div>
                  <p className="title text-[1.6rem] font-medium">Wade Warren</p>
                  <p className="title text-[1.4rem] font-medium text-[#999]">
                    USA, California
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="after-box">
        <button className="after-box-btn">View All Testimonials</button>
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
            <img src={rightArrow} alt="right arrow" />o
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
