import Call from "../../images/contact/icon-call.png";
import Location from "../../images/contact/icon-location.png";
import Mail from "../../images/contact/icon-mail.png";
import SocialNetworks from "../../images/contact/icon-social-networks.png";
import Arrow from "../../images/home/arrow.png";

const ContactWays: React.FC = () => {
  return (
    <section
      className="w-full p-[1rem] bg-[#141414] border-1 border-[#262626]
                grid grid-cols-2 gap-[1rem] get-in-touch-shadow max-w-[50rem] mx-auto"
    >
      <div className="contact-way-container">
        <img src={Mail} alt="Mail" className="contact-img" />
        <p className="opportunity-text">info@estatein.com</p>

        <img src={Arrow} alt="Arrow" className="arrow-icon" />
      </div>
      <div className="contact-way-container">
        <img src={Call} alt="Call" className="contact-img" />
        <p className="opportunity-text">+1 (123) 456-7890</p>

        <img src={Arrow} alt="Arrow" className="arrow-icon" />
      </div>
      <div className="contact-way-container">
        <img src={Location} alt="Location" className="contact-img" />
        <p className="opportunity-text">Main Headquarters</p>

        <img src={Arrow} alt="Arrow" className="arrow-icon" />
      </div>
      <div className="contact-way-container">
        <img
          src={SocialNetworks}
          alt="Social Networks"
          className="contact-img"
        />
        <p className="flex flex-wrap justify-center gap-[1rem]">
          <span className="opportunity-text">Instagram</span>
          <span className="opportunity-text">Linkedin</span>
          <span className="opportunity-text">Fcebook</span>
        </p>
        <img src={Arrow} alt="Arrow" className="arrow-icon" />
      </div>
    </section>
  );
};

export default ContactWays;
