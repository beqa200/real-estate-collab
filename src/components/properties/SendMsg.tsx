import PhoneCall from "../../images/properties/mobile/phone-call.png";
import Email from "../../images/properties/mobile/email.png";

const SendMsg: React.FC<{ stars: string }> = ({ stars }) => {
  return (
    <div className="w-[91.5%] mx-auto mt-[6.1rem]">
      <img src={stars} alt="Stars" />
      <h3 className="title">Let's Make it Happen</h3>
      <p className="about mt-[0.8rem]">
        Ready to take the first step toward your dream property? Fill out the
        form below, and our real estate wizards will work their magic to find
        your perfect match. Don't wait; let's embark on this exciting journey
        together.
      </p>

      <form className="rounded-[12px] p-[2rem] bg-transparent border-1 border-[#262626] mt-[4rem]">
        <div className="flex flex-col flex-wrap gap-[2rem]">
          <div className="input-container">
            <label className="label-text text-white" htmlFor="name">
              First Name
            </label>
            <input
              className="msg-placeholder input-itself"
              id="name"
              placeholder="Enter First Name"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="surname">
              Last Name
            </label>
            <input
              className="msg-placeholder input-itself"
              id="surname"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="email">
              Email
            </label>
            <input
              className="msg-placeholder input-itself"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="phone">
              Phone
            </label>
            <input
              className="msg-placeholder input-itself"
              id="phone"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="location">
              Preferred Location
            </label>
            <select
              id="location"
              className="msg-placeholder input-itself w-full bg-[92%] bg-[#1a1a1a]"
            >
              <option value="volvo" disabled>
                Select Location
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="prop-type">
              Property Type
            </label>
            <select
              id="prop-type"
              className="msg-placeholder input-itself w-full bg-[92%] bg-[#1a1a1a]"
            >
              <option value="volvo" disabled>
                Select Property Type
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="bathrooms-index">
              No. of Bathrooms
            </label>
            <select
              id="bathrooms-index"
              className="msg-placeholder input-itself w-full bg-[92%] bg-[#1a1a1a]"
            >
              <option value="volvo" disabled>
                Select no. of Bedrooms
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="bedrooms-index">
              No. of Bedrooms
            </label>
            <select
              id="bedrooms-index"
              className="msg-placeholder input-itself w-full bg-[92%] bg-[#1a1a1a]"
            >
              <option value="volvo" disabled>
                Select no. of Bedrooms
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="budget">
              Budget
            </label>
            <select
              id="budget"
              className="msg-placeholder input-itself w-full bg-[92%] bg-[#1a1a1a]"
            >
              <option value="volvo" disabled>
                Select Budget
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="input-container">
            <label className="label-text flex flex-col">
              Preferred Contact Method
              <div className="relative mt-[1rem]">
                <input
                  className="msg-placeholder input-itself pl-[4.4rem]"
                  id="your-number"
                  placeholder="Enter Your Number"
                />
                <img
                  src={PhoneCall}
                  alt="Phone-call"
                  className="phone-call-and-email"
                />
                <div className="optional"></div>
              </div>
              <div className="relative mt-[1.6rem]">
                <input
                  className="msg-placeholder input-itself pl-[4.4rem]"
                  id="your-email"
                  placeholder="Enter Your Email"
                />
                <img
                  src={Email}
                  alt="Emmail"
                  className="phone-call-and-email"
                />
                <div className="optional"></div>
              </div>
            </label>
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="msg">
              Message
            </label>
            <input
              className="msg-placeholder input-itself"
              id="msg"
              placeholder="Enter your Message here.."
            />
          </div>
        </div>
        <div>
          <div className="flex gap-[0.6rem] mt-[3rem]">
            <input type="checkbox" name="privacy-police" />
            <p className="text-[1.4rem] font-medium leading-[1.5] text-[#999]">
              I agree with <span className="underline">Terms of Use</span> and
              <span className="underline ml-[0.4rem]">Privacy Policy</span>
            </p>
          </div>
          <button
            className="w-full h-[5.2rem] rounded-[6px] bg-[#703bf7]
                      text-[1.4rem] font-medium leading-[1.71] text-white mt-[2.15rem]"
          >
            Send Your Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMsg;
