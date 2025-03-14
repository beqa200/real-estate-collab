import React from "react";
import Search from "../../images/properties/mobile/search.png";
import Location from "../../images/properties/mobile/location.png";
import Home from "../../images/properties/mobile/home.png";
import Banknote from "../../images/properties/mobile/banknote.png";
import Calendar from "../../images/properties/mobile/calendar.png";
import Cube from "../../images/properties/mobile/cube.png";
import FilterIcon from "../../images/properties/mobile/icon-filter.png";

const Filter: React.FC = () => {
  return (
    <div className="w-[91.5%] mx-auto  mt-[4rem]">
      <div
        className="h-[6.8rem] p-[1rem] bg-transparent border-1 border-[#262626] custom-shadow rounded-[12px]
                  flex items-center justify-between"
      >
        <input
          type="text"
          placeholder="Search For A Property"
          className="text-[1.6rem] font-medium leading-[1.5] text-[#666] w-[70%] h-full"
        />
        <div className="w-[6rem] h-[4.8rem] rounded-[8px] bg-[#703bf7] flex items-center justify-center">
          <img src={Search} alt="Search" />
        </div>
      </div>
      <section className="flex flex-col gap-[2rem] p-[2rem] rounded-[12px] bg-[#1a1a1a] mt-[2rem]">
        <div>
          <input
            disabled
            placeholder="Location"
            className="text-[1.4rem] font-medium leading-[1.5] text-[#999]"
          />
          <img src={Location} alt="Location" />
          <img src={FilterIcon} alt="Arrow" />
        </div>
        <div>
          <input disabled placeholder="Property Type" />
          <img src={Home} alt="Home" />
          <img src={FilterIcon} alt="Arrow" />
        </div>
        <div>
          <input type="number" placeholder="Pricing Range" />
          <img src={Banknote} alt="Banknote" />
          <img src={FilterIcon} alt="Arrow" />
        </div>
        <div>
          <input type="number" placeholder="Property Size" />
          <img src={Cube} alt="Cube" />
          <img src={FilterIcon} alt="Arrow" />
        </div>
        <div>
          <input disabled placeholder="Build Year" />
          <img src={Calendar} alt="Calendar" />
          <img src={FilterIcon} alt="Arrow" />
        </div>
      </section>
    </div>
  );
};

export default Filter;
