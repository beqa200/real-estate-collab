import { useGeneral } from "../../contexts/context";

const Connect: React.FC = () => {
  const { Stars } = useGeneral();
  return (
    <div>
      <img src={Stars} alt="Stars" />
      <h3>Let's Connect</h3>
      <form>
        <label htmlFor="name">First Name</label>
        <input id="name" type="text" placeholder="Enter First Name" />
        <label htmlFor="last-name">Last name</label>
        <input id="last-name" type="text" placeholder="Enter Last Name" />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Enter Your Email" />
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="number" placeholder="Enter Phone Number" />
        <label htmlFor="inquiry-type">Inquiry Type</label>
        <select id="inquiry-type">
          <option value="select-inquiry-type" selected disabled>
            Select Inquiry Type
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <label htmlFor="info-about-us">How Did You Hear About Us?</label>
        <select id="info-about-us">
          <option value="select" selected disabled>
            Select
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <label htmlFor="msg">Message</label>
        <textarea id="msg" placeholder="Enter your Message here.."></textarea>
        <div>
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
