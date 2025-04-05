import Call from "../../images/contact/icon-call.png";
import Location from "../../images/contact/icon-location.png";
import Mail from "../../images/contact/icon-mail.png";
import SocialNetworks from "../../images/contact/icon-social-networks.png";
import Arrow from "../../images/home/arrow.png";

const ContactWays: React.FC = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <img src={Mail} alt="Mail" />
            <p>info@estatein.com</p>
          </div>
        </div>
        <img src={Arrow} alt="Arrow" />
      </div>
      <div>
        <div>
          <div>
            <img src={Call} alt="Call" />
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
        <img src={Arrow} alt="Arrow" />
      </div>
      <div>
        <div>
          <div>
            <img src={Location} alt="Location" />
            <p>Main Headquarters</p>
          </div>
        </div>
        <img src={Arrow} alt="Arrow" />
      </div>
      <div>
        <div>
          <div>
            <img src={SocialNetworks} alt="Social Networks" />
            <span>Instagram</span>
            <span>Linkedin</span>
            <span>Fcebook</span>
          </div>
        </div>
        <img src={Arrow} alt="Arrow" />
      </div>
    </section>
  );
};

export default ContactWays;
