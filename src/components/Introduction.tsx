import IntroductionImg from "../images/introduction/introduction.png";
import RountAd from "../images/Introduction/round-ad.png";

const Introduction: React.FC = () => {
  return (
    <div>
      <div>
        <img src={IntroductionImg} alt="Introduction image" />
        <img src={RountAd} alt="Ad" />
      </div>
      <div>
        <div>
          <h1 className="text-[2.8rem] font-semibold leading-[1.2] text-white">
            Discover Your Dream Property with Estatein
          </h1>
          <p>
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>
        <div>
          <button>Learn More</button>
          <button>Browse Properties</button>
        </div>
        <section>
          <div>
            <div>
              <p>200+</p>
              <span>Happy Customers</span>
            </div>
            <div>
              <p>10+</p>
              <span>Properties For Clients</span>
            </div>
          </div>
          <div>
            <p>16+</p>
            <span>Years of Experience</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Introduction;
