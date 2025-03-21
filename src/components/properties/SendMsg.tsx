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
        <div>
          <div>
            <label htmlFor="name">First Name</label>
            <input id="name" placeholder="Enter First Name" />
          </div>
          <div>
            <label htmlFor="surname">Last Name</label>
            <input id="surname" placeholder="Enter Last Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Enter Your Email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" placeholder="Enter Phone Number" />
          </div>
          <div>
            <label htmlFor="location">Preferred Location</label>
            <select id="location">
              <option value="volvo" disabled>
                Select Location
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <label htmlFor="prop-type">Property Type</label>
            <select id="prop-type">
              <option value="volvo" disabled>
                Select Property Type
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <label htmlFor="bathrooms-index">No. of Bathrooms</label>
            <select id="bathrooms-index">
              <option value="volvo" disabled>
                Select no. of Bedrooms
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <label htmlFor="bedrooms-index">No. of Bedrooms</label>
            <select id="bedrooms-index">
              <option value="volvo" disabled>
                Select no. of Bedrooms
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget">Budget</label>
            <select id="budget">
              <option value="volvo" disabled>
                Select Budget
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <label>
              Preferred Contact Method
              <div>
                <input id="your-number" placeholder="Enter Your Number" />
                <img src={PhoneCall} alt="Phone-call" />
                <div></div>
              </div>
              <div>
                <input id="your-email" placeholder="Enter Your Email" />
                <img src={Email} alt="Emmail" />
                <div></div>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="msg">Message</label>
            <input id="msg" placeholder="Enter your Message here.." />
          </div>
        </div>
        <div>
          <div>
            <input type="checkbox" name="privacy-police" />
            <p>
              I agree with <span>Terms of Use</span> and{" "}
              <span>Privacy Policy</span>
            </p>
          </div>
          <button>Send Your Message</button>
        </div>
      </form>
    </div>
  );
};

export default SendMsg;
