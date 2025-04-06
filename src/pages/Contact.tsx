import React from "react";
import GetInTouch from "../components/contact/GetInTouch";
import ContactWays from "../components/contact/ContactWays";
import Connect from "../components/contact/Connect";

const Contact: React.FC = () => {
  return (
    <>
      <GetInTouch />
      <ContactWays />
      <Connect />
    </>
  );
};

export default Contact;
