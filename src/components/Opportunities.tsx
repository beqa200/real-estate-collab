import FirstOpportunityIcon from "../images/home/opportunity-1.png";
import SecondOpportunityIcon from "../images/home/opportunity-2.png";
import ThirdOpportunityIcon from "../images/home/opportunity-3.png";
import FourthOpportunityIcon from "../images/home/opportunity-4.png";
import Arrow from "../images/home/arrow.png";

const Opportunities: React.FC = () => {
  return (
    <div>
      <div>
        <img src={FirstOpportunityIcon} alt="Home" />
        <p>Find Your Dream Home</p>
        <img src={Arrow} />
      </div>
      <div>
        <img src={SecondOpportunityIcon} alt="Photographer" />
        <p>Unlock Property Value</p>
        <img src={Arrow} />
      </div>
      <div>
        <img src={ThirdOpportunityIcon} alt="Managment" />
        <p>Effortless Property Management</p>
        <img src={Arrow} />
      </div>
      <div>
        <img src={FourthOpportunityIcon} alt="Sun" />
        <p>Smart Investments, Informed Decisions</p>
        <img src={Arrow} />
      </div>
    </div>
  );
};

export default Opportunities;
