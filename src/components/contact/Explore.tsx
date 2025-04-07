import ExploreImg1 from "../../images/contact/explore-img1.png";
import ExploreImg2 from "../../images/contact/explore-img2.png";
import ExploreImg3 from "../../images/contact/explore-img3.png";
import ExploreImg4 from "../../images/contact/explore-img4.png";
import ExploreImg5 from "../../images/contact/explore-img5.png";
// import AbstractVisual from "../../images/contact/abstract-background.png";
import DealMaking from "../../images/contact/deal-making.png";
import { useGeneral } from "../../contexts/context";

const Explore: React.FC = () => {
  const { Stars } = useGeneral();

  return (
    <div className="bg-[url('././images/contact/abstract-background.png')] bg-no-repeat">
      <div>
        <img src={ExploreImg1} alt="Office" />
        <img src={ExploreImg2} alt="Staff" />
        <img src={ExploreImg3} alt="Working" />
        <img src={ExploreImg4} alt="Staff" />
        <img src={ExploreImg5} alt="Stafff" />
      </div>
      <img src={Stars} alt="Stars" />
      <div>
        <div>
          <h3 className="title">Explore Estatein's World</h3>
          <p className="about mt-[0.8rem]">
            Step inside the world of Estatein, where professionalism meets
            warmth, and expertise meets passion. Our gallery offers a glimpse
            into our team and workspaces, inviting you to get to know us better.
          </p>
        </div>
        <div>
          <img src={DealMaking} alt="Deal making" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
