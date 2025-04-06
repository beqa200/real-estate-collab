import { useContext, createContext, ReactNode } from "react";
import { useState } from "react";
import Stars from "../images/home/stars.png";

export const MainContext = createContext<
  | {
      locations: string[];
      setLocations: React.Dispatch<React.SetStateAction<string[]>>;
      propTypes: string[];
      setPropTypes: React.Dispatch<React.SetStateAction<string[]>>;
      years: number[];
      setYears: React.Dispatch<React.SetStateAction<number[]>>;
      prices: string[];
      setPrices: React.Dispatch<React.SetStateAction<string[]>>;
      sizes: string[];
      setSizes: React.Dispatch<React.SetStateAction<string[]>>;
      Stars: string;
    }
  | undefined
>(undefined);

export default function MainProvider({ children }: { children: ReactNode }) {
  const [locations, setLocations] = useState<string[]>([]);
  const [propTypes, setPropTypes] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [prices, setPrices] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
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
        Stars,
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
