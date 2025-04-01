import { useContext, createContext, ReactNode } from "react";
import { useState } from "react";

const [locations, setLocations] = useState([]);
const [propTypes, setPropTypes] = useState([]);
const [years, setYears] = useState([]);
const [prices, setPrices] = useState([]);
const [sizes, setSizes] = useState([]);

const MainContext = createContext<{
  locations: string[];
  setLocations: React.Dispatch<React.SetStateAction<never[]>>;
  propTypes: string[];
  setPropTypes: React.Dispatch<React.SetStateAction<never[]>>;
  years: number[];
  setYears: React.Dispatch<React.SetStateAction<never[]>>;
  prices: string[];
  setPrices: React.Dispatch<React.SetStateAction<never[]>>;
  sizes: string[];
  setSizes: React.Dispatch<React.SetStateAction<never[]>>;
}>({
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
});

export default function MainProvider({ children }: { children: ReactNode }) {
  return (
    <MainContext.Provider
      value={{
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
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export const useGeneral = () => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("Context has not found");
  }

  return context;
};
