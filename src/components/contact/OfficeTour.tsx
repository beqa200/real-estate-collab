import { useGeneral } from "../../contexts/context";
import PhoneCall from "../../images/properties/mobile/phone-call.png";
import Email from "../../images/properties/mobile/email.png";
import Location from "../../images/contact/icon-location-white.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { IOffice } from "../../types/types";

const OfficeTour: React.FC = () => {
  const {
    Stars,
    isLargeScreen,
    setIsLargeScreen,
    isLargestScreen,
    setIsLargestScreen,
  } = useGeneral();

  const [offices, setOffices] = useState<IOffice[]>([]);
  const [officeFilter, setOfficeFilter] = useState<string>("All");

  useEffect(() => {
    axios
      .get("http://104.248.242.53:8000/contact/office-locations/")
      .then((res) => setOffices(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-[91.5%] mt-[6.1rem] mx-auto max-w-[50rem] tablet:max-w-[280rem]">
      <img src={Stars} alt="Stars" className="custom-blend" />
      <h3 className="contact-title">Discover Our Office Locations</h3>
      <p className="about mt-[0.8rem] tablet:mt-[1rem]">
        {!isLargeScreen && !isLargestScreen
          ? "Estatein is here to serve you across multiple locations. Whether you'relooking to meet our team."
          : isLargeScreen
          ? "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
          : ""}
      </p>
      <div
        className="flex items-center justify-center gap-[1rem] p-[1rem] rounded-[8px] 
                  bg-[#1a1a1a] mt-[4rem] tablet:w-[36%] tablet:mt-[6rem]"
      >
        <div
          className={`office-info-filter ${
            officeFilter === "All" ? "bg-[#141414]" : ""
          }`}
          onClick={() => setOfficeFilter("All")}
        >
          All
        </div>
        <div
          className={`office-info-filter ${
            officeFilter === "Regional" ? "bg-[#141414]" : ""
          }`}
          onClick={() => setOfficeFilter("Regional")}
        >
          Regional
        </div>
        <div
          className={`office-info-filter ${
            officeFilter === "International" ? "bg-[#141414]" : ""
          }`}
          onClick={() => setOfficeFilter("International")}
        >
          International
        </div>
      </div>
      <div className="flex flex-col gap-[2rem] mt-[3rem] tablet:flex-row tablet:mt-[4rem]">
        {offices
          .filter((office) => {
            if (officeFilter === "Regional") {
              return office.office_type === "regional";
            } else if (officeFilter === "International") {
              return office.office_type === "international";
            } else {
              return (
                office.office_type === "international" ||
                office.office_type === "regional"
              );
            }
          })
          .map((office) => (
            <div
              className={`office-type-container ${
                officeFilter !== "All" ? "w-[50%]" : ""
              }`}
            >
              <p className="office-type">{office.title}</p>
              <h5 className="office-location tablet:w-[103%]">
                {office.address}
              </h5>
              <p className="office-type text-[#999] mt-[0.8rem] tablet:mt-[1rem]">
                {office.description}
              </p>
              <section className="contacts-container">
                <div className="contact-container">
                  <img src={Email} alt="Email" />
                  <span className="office-type tracking-normal">
                    {office.email}
                  </span>
                </div>
                <div className="contact-container">
                  <img src={PhoneCall} alt="Phone call" />
                  <span className="office-type tracking-normal">
                    {office.phone}
                  </span>
                </div>
                <div className="contact-container">
                  <img src={Location} alt="Location" />
                  <span className="office-type tracking-normal">
                    Metropolis
                  </span>
                </div>
              </section>
              <button className="get-direction-btn">Get Direction</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OfficeTour;
