import { useGeneral } from "../../contexts/context";
import PhoneCall from "../../images/properties/mobile/phone-call.png";
import Email from "../../images/properties/mobile/email.png";
import Location from "../../images/properties/mobile/location.png";

const OfficeTour: React.FC = () => {
  const { Stars } = useGeneral();

  return (
    <div className="w-[91.5%] mt-[6.1rem] mx-auto">
      <img src={Stars} alt="Stars" />
      <h3 className="title">Discover Our Office Locations</h3>
      <p className="about mt-[0.8rem]">
        Estatein is here to serve you across multiple locations. Whether you're
        looking to meet our team.
      </p>
      <div
        className="flex items-center justify-center gap-[1rem] p-[1rem] rounded-[8px] 
                  bg-[#1a1a1a] mt-[4rem]"
      >
        <div className="office-info-filter">All</div>
        <div className="office-info-filter">Regional</div>
        <div className="office-info-filter">International</div>
      </div>
      <div>
        <p>Main Headquarters</p>
        <h5>123 Estatein Plaza, City Center, Metropolis</h5>
        <p>
          Our main headquarters serve as the heart of Estatein. Located in the
          bustling city center, this is where our core team of experts operates,
          driving the excellence and innovation that define us.
        </p>
        <section>
          <div>
            <img src={Email} alt="Email" />
            <span>info@estatein.com</span>
          </div>
          <div>
            <img src={PhoneCall} alt="Phone call" />
            <span>+1 (123) 456-7890</span>
          </div>
          <div>
            <img src={Location} alt="Location" />
            <span>Metropolis</span>
          </div>
        </section>
        <button>Get Direction</button>
      </div>
      <div>
        <p>Regional Offices</p>
        <h5>456 Urban Avenue, Downtown District, Metropolis</h5>
        <p>
          Estatein's presence extends to multiple regions, each with its own
          dynamic real estate landscape. Discover our regional offices, staffed
          by local experts who understand the nuances of their respective
          markets.
        </p>
        <section>
          <div>
            <img src={Email} alt="Email" />
            <span>info@estatein.com</span>
          </div>
          <div>
            <img src={PhoneCall} alt="Phone call" />
            <span>+1 (123) 628-7890</span>
          </div>
          <div>
            <img src={Location} alt="Location" />
            <span>Metropolis</span>
          </div>
        </section>
        <button>Get Direction</button>
      </div>
    </div>
  );
};

export default OfficeTour;
