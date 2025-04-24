import React from "react";
import GetInTouch from "../components/contact/GetInTouch";
import ContactWays from "../components/contact/ContactWays";
import Connect from "../components/contact/Connect";
import OfficeTour from "../components/contact/OfficeTour";
import Explore from "../components/contact/Explore";
import Suggestion from "../components/home/Suggestion";

const Contact: React.FC = () => {
  return (
    <>
      <GetInTouch />
      <ContactWays />
      <Connect />
      <OfficeTour />
      <Explore />
      <Suggestion />
    </>
  );
};

export default Contact;
