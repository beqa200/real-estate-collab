import { useGeneral } from "../../contexts/context";

const Connect: React.FC = () => {
  const { Stars } = useGeneral();
  return (
    <div className="w-[91.5%] mx-auto mt-[6.1rem]">
      <img src={Stars} alt="Stars" />
      <h3 className="title">Let's Connect</h3>
      <p className="about mt-[0.8rem]">
        We're excited to connect with you and learn more about your real estate
        goals. Use the form below to get in touch with Estatein.
      </p>

      <form className="p-[2rem] rounded-[12px] border-1 border-[#262626] mt-[4rem]">
        <div className="grid gap-y-[2rem]">
          <div className="input-container">
            <label className="label-text" htmlFor="name">
              First Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter First Name"
              className="connect-input"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="last-name">
              Last name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Enter Last Name"
              className="connect-input"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter Your Email"
              className="connect-input"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="number"
              placeholder="Enter Phone Number"
              className="connect-input"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="inquiry-type">
              Inquiry Type
            </label>
            <select
              id="inquiry-type"
              className="connect-input prop-select msg-placeholder"
              style={{
                width: "100%",
                backgroundColor: "#1a1a1a",
              }}
            >
              <option value="select-inquiry-type" selected disabled>
                Select Inquiry Type
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="info-about-us">
              How Did You Hear About Us?
            </label>
            <select
              id="info-about-us"
              className="connect-input prop-select msg-placeholder"
              style={{ width: "100%", backgroundColor: "#1a1a1a" }}
            >
              <option value="select" selected disabled>
                Select
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="msg">
              Message
            </label>
            <textarea
              id="msg"
              rows={3}
              placeholder="Enter your Message here.."
              className="w-full rounded-[6px] py-[1.6rem] pl-[2rem] bg-[#1a1a1a] border-1 border-[#262626]"
            ></textarea>
          </div>
        </div>

        <div className="input-container">
          <div>
            <input type="checkbox" />
            <p>
              I agree with <span>Terms of Use</span> and
              <span>Privacy Policy</span>
            </p>
            I agree with Terms of Use and Privacy Policy
          </div>
          <button type="submit">Send Your Message</button>
        </div>
      </form>
    </div>
  );
};

export default Connect;
