import { useGeneral } from "../../contexts/context";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { TFormData } from "../../types/types";

const Connect: React.FC = () => {
  const {
    Stars,
    isLargeScreen,
    setIsLargeScreen,
    isLargestScreen,
    setIsLargestScreen,
  } = useGeneral();

  const [particularInquiryType, setParticularInquiryType] =
    useState<string>("");
  const [particularHeardAbout, setParticularHeardAbout] = useState<string>("");

  const [formData, setFormData] = useState<TFormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    inquiry_type: "",
    heard_about: "",
    message: "",
    agree_to_terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target as {
      name: string;
      value: string;
      type: string;
      checked?: boolean;
    };

    setFormData((prev) => ({
      ...prev,
      [name as keyof TFormData]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://104.248.242.53:8000/contact/contact-messages/",
        formData
      );

      if (response.status === 200) {
        alert("Form sent successfully");
      } else {
        alert("Form has not sent");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          inquiry_type: "",
          heard_about: "",
          message: "",
          agree_to_terms: false,
        });
      }
    } catch (err) {
      console.log("Form sending error:", err);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
      setIsLargestScreen(window.innerWidth >= 1920);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-[91.5%] mx-auto mt-[6.1rem] max-w-[50rem] tablet:max-w-[280rem] tablet:mt-[11.8rem]">
      <img src={Stars} alt="Stars" className="custom-blend" />
      <h3 className="contact-title">Let's Connect</h3>
      <p className="about mt-[0.8rem] tablet:gap-[1rem]">
        {!isLargeScreen && !isLargeScreen
          ? "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein."
          : isLargeScreen
          ? "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
          : ""}
      </p>

      <form
        onSubmit={handleSubmit}
        className="p-[2rem] rounded-[12px] border-1 border-[#262626] mt-[4rem] tablet:p-[8rem]"
      >
        <div className="grid gap-y-[2rem] tablet:gap-[3rem] tablet:grid-cols-3">
          <div className="input-container">
            <label className="label-text" htmlFor="name">
              First Name
            </label>
            <input
              name="first_name"
              id="first_name"
              type="text"
              placeholder="Enter First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="connect-input"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="last-name">
              Last name
            </label>
            <input
              name="last_name"
              id="last-name"
              type="text"
              placeholder="Enter Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="connect-input"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="text"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="connect-input"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="phone">
              Phone
            </label>
            <input
              name="phone"
              id="phone"
              type="number"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="connect-input"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="inquiry_type">
              Inquiry Type
            </label>
            <select
              name="inquiry_type"
              id="inquiry_type"
              className="connect-input prop-select msg-placeholder"
              value={formData.inquiry_type}
              onChange={handleChange}
              style={{
                width: "100%",
                backgroundColor: "#1a1a1a",
              }}
            >
              <option value="select-inquiry-type" disabled>
                Select Inquiry Type
              </option>
              <option value="buying">Buying</option>
              <option value="selling">Selling</option>
              <option value="invstment">Investment</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="info-about-us">
              How Did You Hear About Us?
            </label>
            <select
              name="heard_about"
              id="heard_about"
              value={formData.heard_about}
              onChange={handleChange}
              className="connect-input prop-select msg-placeholder"
              style={{ width: "100%", backgroundColor: "#1a1a1a" }}
            >
              <option value="select" disabled>
                Select
              </option>
              <option value="google">Google</option>
              <option value="social_media">Social media</option>
              <option value="referral">ReferralOther</option>
              <option value="other">Audi</option>
            </select>
          </div>
          <div className="input-container tablet:col-span-full">
            <label className="label-text" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={3}
              placeholder="Enter your Message here.."
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-[6px] py-[1.6rem] pl-[2rem] bg-[#1a1a1a] border-1 border-[#262626]
                        tablet:min-h-[12rem]"
            ></textarea>
          </div>
        </div>
        <div className="input-container tablet:flex-row tablet:justify-between">
          <div className="flex gap-[0.6rem] mt-[3rem]">
            <input
              type="checkbox"
              name="agree_to_terms"
              id="agree_to_terms"
              checked={formData.agree_to_terms}
              onChange={handleChange}
            />
            <p className="text-[1.4rem] font-medium leading-[1.5] text-[#999] tablet:text-[1.6rem]">
              I agree with <span className="underline">Terms of Use</span> and
              <span className="underline ml-[0.4rem]">Privacy Policy</span>
            </p>
          </div>
          <button type="submit" className="send-btn">
            Send Your Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Connect;
