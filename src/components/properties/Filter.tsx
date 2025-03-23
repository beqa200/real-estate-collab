import React from "react";
import Search from "../../images/properties/mobile/search.png";
import Location from "../../images/properties/mobile/location.png";
import Home from "../../images/properties/mobile/home.png";
import Banknote from "../../images/properties/mobile/banknote.png";
import Calendar from "../../images/properties/mobile/calendar.png";
import Cube from "../../images/properties/mobile/cube.png";

const Filter: React.FC = () => {
  return (
    <div className="w-[91.5%] mx-auto mt-[4rem] max-w-[50rem]">
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
        <div className="select-text select-container">
          <select name="location" id="location" className="select-itself">
            <option value="Location" disabled selected>
              Location
            </option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <img src={Location} alt="Location" className="select-img" />
          <div className="w-[0.1rem] h-[2rem] bg-[#262626] absolute left-[4rem] top-[1.4rem]"></div>
        </div>
        <div className="select-text select-container">
          <select name="type" id="type" className="select-itself">
            <option value="Property Type" disabled selected>
              Property Type
            </option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <img src={Home} alt="Home" className="select-img" />
          <div className="w-[0.1rem] h-[2rem] bg-[#262626] absolute left-[4rem] top-[1.4rem]"></div>
        </div>
        <div className="select-text select-container">
          <select name="price" id="price" className="select-itself">
            <option value="Pricing Range" defaultValue={"Pricing range"}>
              Pricing Range
            </option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <img src={Banknote} alt="Home" className="select-img" />
          <div className="w-[0.1rem] h-[2rem] bg-[#262626] absolute left-[4rem] top-[1.4rem]"></div>
        </div>
        <div className="select-text select-container">
          <select name="size" id="size" className="select-itself">
            <option value="Property Size" disabled selected>
              Property Size
            </option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <img src={Cube} alt="Home" className="select-img" />
          <div className="w-[0.1rem] h-[2rem] bg-[#262626] absolute left-[4rem] top-[1.4rem]"></div>
        </div>
        <div className="select-text select-container">
          <select name="year" value="year" className="select-itself">
            <option value="Build Year" disabled selected>
              Build Year
            </option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <img src={Calendar} alt="Home" className="select-img" />
          <div className="w-[0.1rem] h-[2rem] bg-[#262626] absolute left-[4rem] top-[1.4rem]"></div>
        </div>
      </section>
    </div>
  );
};

export default Filter;
