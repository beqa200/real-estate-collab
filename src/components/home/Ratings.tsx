import Star from "../../images/home/star.png";
import Customer from "../../images/home/profile-picture.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { IRating } from "../../types/types";

const Ratings: React.FC<{
  stars: string;
  leftArrow: string;
  rightArrow: string;
}> = ({ stars, leftArrow, rightArrow }) => {
  const swiperRef: any = useRef(null);

  const [ratings, setRatings] = useState<IRating[] | null>();
  useEffect(() => {
    axios
      .get("http://104.248.242.53:8000/home/testimonal/")
      .then((res) => setRatings(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-[95.5%] mx-auto mt-[7.1rem] max-w-[50rem] xl:max-w-[280rem] xl:relative xl:mt-[11rem]">
      <img src={stars} alt="Stars" />
      <h3 className="title xl:text-[3.8rem]">What Our Clients Says</h3>
      <p className="about mt-[0.6rem] xl:text-[1.6rem] xl:mt-[1rem]">
        Read the success stories and heartfelt testimonials from our valued
        clients. Discover why they chose Estatein for their real estate needs.
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {ratings?.map((item: IRating) => (
          <SwiperSlide>
            <div
              className="mt-[4rem] p-[3rem] rounded-[1rem] bg-[#141414] border-1 border-[#262626]
                      xl:p-[4rem] xl:mt-[6rem]"
            >
              <div>
                <div>
                  <img src={Star} alt="Star" />
                  <h6 className="title text-[1.8rem] mt-[2.4rem] xl:text-[2rem] xl:mt-[3rem]">
                    {item.testimonial}
                  </h6>
                  <p className="title text-[1.4rem] font-medium mt-[0.6rem] xl:text-[1.6rem] xl:mt-[1rem]">
                    {item.testimonial}
                  </p>
                </div>
                <div className="flex items-center gap-[1rem] mt-[2.4rem] xl:mt-[3rem]">
                  <div className="flex">
                    <img src={item.image} alt="customer" />
                  </div>
                  <div>
                    <p className="title text-[1.6rem] font-medium xl:text-[1.8rem]">
                      {item.name}
                    </p>
                    <p className="title text-[1.4rem] font-medium text-[#999] xl:text-[1.6rem]">
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
        <button className="after-box-btn xl:absolute xl:top-[5rem] xl:right-0">
          View All Testimonials
        </button>
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
            <img src={rightArrow} alt="right arrow" />o
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
