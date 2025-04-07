import ExploreImg1 from "../../images/contact/explore-img1.png";
import ExploreImg2 from "../../images/contact/explore-img2.png";
import ExploreImg3 from "../../images/contact/explore-img3.png";
import ExploreImg4 from "../../images/contact/explore-img4.png";
import ExploreImg5 from "../../images/contact/explore-img5.png";
import DealMaking from "../../images/contact/deal-making.png";
import { useGeneral } from "../../contexts/context";

const Explore: React.FC = () => {
  const { Stars } = useGeneral();

  return (
    <div
      className="w-[91.5%] mx-auto bg-[url('././images/contact/abstract-background.png')] bg-no-repeat py-[2rem] p-[1.45rem] 
                bg-cover rounded-[12px] bg-[#1a1a1a] border-1 border-[#262626] mt-[8rem] max-w-[50rem]"
    >
      <div className="grid grid-cols-2 gap-[1rem]">
        <img src={ExploreImg1} alt="Office" />
        <img src={ExploreImg2} alt="Staff" />
        <img src={ExploreImg3} alt="Working" />
        <div className="flex gap-[1rem]">
          <img src={ExploreImg4} alt="Staff" />
          <img src={ExploreImg5} alt="Staff" />
        </div>
      </div>
      <div className="bg-transparent">
        <img
          src={Stars}
          alt="Stars"
          className="mt-[2.5rem] bg-transparent custom-blend"
        />
      </div>

      <div>
        <div className="mt-[1.2rem]">
          <h3 className="title">Explore Estatein's World</h3>
          <p className="about mt-[0.8rem]">
            Step inside the world of Estatein, where professionalism meets
            warmth, and expertise meets passion. Our gallery offers a glimpse
            into our team and workspaces, inviting you to get to know us better.
          </p>
        </div>
        <div className="w-full object-contain mt-[2rem]">
          <img src={DealMaking} alt="Deal making" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
