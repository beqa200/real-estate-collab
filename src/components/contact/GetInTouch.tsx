import React from "react";
import { useGeneral } from "../../contexts/context";
import { useEffect } from "react";

const GetInTouch: React.FC = () => {
  const {
    isLargeScreen,
    setIsLargeScreen,
    isLargestScreen,
    setIsLargestScreen,
  } = useGeneral();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
      setIsLargestScreen(window.innerWidth >= 1920);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="py-[5rem] px-[1.6rem] bg-get-in-touch-gradient border-b-1 border-[#262626] max-w-[50rem] mx-auto
                tablet:max-w-[280rem] tablet:py-[10rem] tablet:pl-[5.2rem] tablet:pr-[20rem]"
    >
      <h1 className="contact-title">Get in Touch with Estatein</h1>
      <p className="about mt-[1rem]">
        {!isLargeScreen && !isLargestScreen
          ? "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have."
          : isLargeScreen
          ? "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
          : ""}
      </p>
    </div>
  );
};

export default GetInTouch;
