import FirstOpportunityIcon from "../../images/home/opportunity-1.png";
import SecondOpportunityIcon from "../../images/home/opportunity-2.png";
import ThirdOpportunityIcon from "../../images/home/opportunity-3.png";
import FourthOpportunityIcon from "../../images/home/opportunity-4.png";
import Arrow from "../../images/home/arrow.png";

const Opportunities: React.FC = () => {
  return (
    <div className="opportunities-container">
      <div className="opportunity-container ">
        <img
          src={FirstOpportunityIcon}
          alt="Home"
          className="opportunity-img"
        />
        <p className="opportunity-text">Find Your Dream Home</p>
        <img src={Arrow} className="arrow" />
      </div>
      <div className="opportunity-container ">
        <img
          src={SecondOpportunityIcon}
          alt="Photographer"
          className="opportunity-img"
        />
        <p className="opportunity-text">Unlock Property Value</p>
        <img src={Arrow} className="arrow" />
      </div>
      <div className="opportunity-container ">
        <img
          src={ThirdOpportunityIcon}
          alt="Managment"
          className="opportunity-img"
        />
        <p className="opportunity-text">Effortless Property Management</p>
        <img src={Arrow} className="arrow" />
      </div>
      <div className="opportunity-container ">
        <img
          src={FourthOpportunityIcon}
          alt="Sun"
          className="opportunity-img"
        />
        <p className="opportunity-text">
          Smart Investments, Informed Decisions
        </p>
        <img src={Arrow} className="arrow" />
      </div>
    </div>
  );
};

export default Opportunities;
