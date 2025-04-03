import React from "react";
import Search from "../../images/properties/mobile/search.png";
import Location from "../../images/properties/mobile/location.png";
import Home from "../../images/properties/mobile/home.png";
import Banknote from "../../images/properties/mobile/banknote.png";
import Calendar from "../../images/properties/mobile/calendar.png";
import Cube from "../../images/properties/mobile/cube.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useGeneral } from "../../contexts/context";
import { useNavigate } from "react-router-dom";

const Filter: React.FC = () => {
  const navigate = useNavigate();

  const {
    locations,
    setLocations,
    propTypes,
    setPropTypes,
    years,
    setYears,
    prices,
    setPrices,
    sizes,
    setSizes,
  } = useGeneral();

  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    axios
      .get(`http://104.248.242.53:8000/property/property-filter-options/?`)
      .then((res) => {
        setLocations(res.data.locations);
        setPropTypes(res.data.property_types);
        setYears(res.data.build_years);
        setPrices(res.data.price_ranges);
        setSizes(res.data.size_ranges);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const queryParams = {
    location: selectedLocation,
    property_type: selectedPropertyType,
    year: selectedYear,
    price: selectedPrice,
    size: selectedPrice,
  };

  const queryString = new URLSearchParams(queryParams);

  return (
    <div className="w-[91.5%] mx-auto mt-[4rem] max-w-[50rem] tablet:max-w-[280rem] tablet:mt-[-6rem]">
      <div
        className="h-[6.8rem] p-[1rem] bg-[#141414] border-1 border-[#262626] custom-shadow rounded-[12px]
                  flex items-center justify-between tablet:h-[8.1rem] tablet:p-[1.6rem] tablet:rounded-b-none tablet:mx-[9rem]"
      >
        <input
          type="text"
          placeholder="Search For A Property"
          className="text-[1.6rem] font-medium leading-[1.5] text-[#666] w-[70%] h-full
                    tablet:text-[2rem]"
        />
        <div
          className="w-[6rem] h-[4.8rem] rounded-[8px] bg-[#703bf7] flex items-center justify-center
                    tablet:w-[14.8rem] tablet:h-[4.9rem] tablet:rounded-[8px] tablet:gap-[0.85rem]"
          onClick={() => {
            navigate(`?${queryString.toString()}`);
          }}
        >
          <img src={Search} alt="Search" />
          <span className="hidden tablet:inline text-[1.4rem] font-medium leading-[1.5] text-white">
            Find Property
          </span>
        </div>
      </div>
      <section
        className="flex flex-col gap-[2rem] p-[2rem] rounded-[12px] bg-[#1a1a1a] mt-[2rem]
                  tablet:flex-row tablet:gap-[1.4rem] tablet:p-[1rem] tablet:rounded-[1.2rem] tablet:mt-0"
      >
        <div className="select-text select-container">
          <select
            name="location"
            id="location"
            className="select-itself"
            onChange={(event) => setSelectedLocation(event.target.value)}
            value={selectedLocation}
          >
            <option value="Location" disabled selected>
              Location
            </option>
            {locations.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <img src={Location} alt="Location" className="select-img" />
          <div className="w-[0.1rem] h-[2rem] bg-[#262626] absolute left-[4rem] top-[1.4rem]"></div>
        </div>
        <div className="select-text select-container">
          <select
            name="type"
            id="type"
            className="select-itself"
            onChange={(event) => setSelectedPropertyType(event.target.value)}
            value={selectedPropertyType}
          >
            <option value="Property Type" disabled selected>
              Property Type
            </option>
            {propTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <img src={Home} alt="Home" className="select-img" />
          <div className="w-[0.1rem] h-[2rem] bg-[#262626] absolute left-[4rem] top-[1.4rem]"></div>
        </div>
        <div className="select-text select-container">
          <select
            name="price"
            id="price"
            className="select-itself"
            onChange={(event) => setSelectedPrice(event.target.value)}
            value={selectedPrice}
          >
            <option value="Pricing Range" defaultValue={"Pricing range"}>
              Pricing Range
            </option>
            {prices.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <img src={Banknote} alt="Home" className="select-img" />
          <div className="w-[0.1rem] h-[2rem] bg-[#262626] absolute left-[4rem] top-[1.4rem]"></div>
        </div>
        <div className="select-text select-container">
          <select
            name="size"
            id="size"
            className="select-itself"
            onChange={(event) => setSelectedSize(event.target.value)}
            value={selectedSize}
          >
            <option value="Property Size" disabled selected>
              Property Size
            </option>
            {sizes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <img src={Cube} alt="Home" className="select-img" />
          <div className="w-[0.1rem] h-[2rem] bg-[#262626] absolute left-[4rem] top-[1.4rem]"></div>
        </div>
        <div className="select-text select-container">
          <select
            name="year"
            id="year"
            className="select-itself"
            onChange={(event) => setSelectedYear(event.target.value)}
            value={selectedYear}
          >
            <option value="Build Year" disabled selected>
              Build Year
            </option>
            {years.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <img src={Calendar} alt="Home" className="select-img" />
          <div className="w-[0.1rem] h-[2rem] bg-[#262626] absolute left-[4rem] top-[1.4rem]"></div>
        </div>
      </section>
    </div>
  );
};

export default Filter;
