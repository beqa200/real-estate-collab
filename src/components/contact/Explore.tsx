import ExploreImg1 from "../../images/contact/explore-img1.png";
import ExploreImg2 from "../../images/contact/explore-img2.png";
import ExploreImg3 from "../../images/contact/explore-img3.png";
import ExploreImg4 from "../../images/contact/explore-img4.png";
import ExploreImg5 from "../../images/contact/explore-img5.png";
import DealMaking from "../../images/contact/deal-making.png";
import { useGeneral } from "../../contexts/context";
import ExploreImg1Medium from "../../images/contact/tablet/explore-img1-medium.png";
import ExploreImg2Medium from "../../images/contact/tablet/explore-img2-medium.png";
import ExploreImg3Medium from "../../images/contact/tablet/explore-img3-medium.png";
import ExploreImg4Medium from "../../images/contact/tablet/explore-img4-medium.png";
import ExploreImg5Medium from "../../images/contact/tablet/explore-img5-medium.png";
import DealMakingMedium from "../../images/contact/tablet/deal-making-medium.png";

const Explore: React.FC = () => {
  const {
    Stars,
    isLargeScreen,
    setIsLargeScreen,
    isLargestScreen,
    setIsLargestScreen,
  } = useGeneral();

  return (
    <div
      className="w-[91.5%] mx-auto bg-[url('././images/contact/abstract-background.png')] bg-no-repeat py-[2rem] px-[1.45rem] 
                bg-cover rounded-[12px] bg-[#1a1a1a] border-1 border-[#262626] mt-[8rem] max-w-[50rem]
                tablet:max-w-[280rem] tablet:py-[4rem] tablet:bg-[url('././images/contact/tablet/abstract-background-medium.png')]
                tablet:bg-top-left"
    >
      {!isLargeScreen && !isLargestScreen ? (
        <div className="grid grid-cols-2 gap-[1rem]">
          <img src={ExploreImg1} alt="Office" className="explore-img" />
          <img src={ExploreImg2} alt="Staff" className="explore-img" />
          <img src={ExploreImg3} alt="Working" className="explore-img" />
          <div className="grid grid-cols-2 gap-[1rem]">
            <img src={ExploreImg4} alt="Staff" className="explore-img" />
            <img src={ExploreImg5} alt="Staff" className="explore-img" />
          </div>
          <div className="col-span-2">
            <div className="bg-transparent">
              <img
                src={Stars}
                alt="Stars"
                className="bg-transparent custom-blend"
              />
            </div>
            <div className="mt-[1.2rem]">
              <h3 className="contact-title">Explore Estatein's World</h3>
              <p className="about mt-[0.8rem] tablet:mt-[1rem]">
                Step inside the world of Estatein, where professionalism meets
                warmth, and expertise meets passion. Our gallery offers a
                glimpse into our team and workspaces, inviting you to get to
                know us better.
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="w-full object-contain">
              <img
                src={DealMaking}
                alt="Deal making"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : isLargeScreen ? (
        <div className="grid grid-cols-2 grid-flow-dense gap-[1.3rem] ">
          <img src={ExploreImg1Medium} alt="Office" className="explore-img" />
          <img src={ExploreImg2Medium} alt="Staff" className="explore-img" />
          <img src={ExploreImg3Medium} alt="Working" className="explore-img" />
          <div className="grid grid-cols-2 gap-[1.3rem]">
            <img src={ExploreImg4Medium} alt="Staff" className="explore-img" />
            <img src={ExploreImg5Medium} alt="Staff" className="explore-img" />
          </div>
          <div>
            <div className="bg-transparent">
              <img
                src={Stars}
                alt="Stars"
                className="bg-transparent custom-blend"
              />
            </div>
            <div className="mt-[1.2rem]">
              <h3 className="contact-title">Explore Estatein's World</h3>
              <p className="about mt-[0.8rem] tablet:mt-[1rem]">
                Step inside the world of Estatein, where professionalism meets
                warmth, and expertise meets passion. Our gallery offers a
                glimpse into our team and workspaces, inviting you to get to
                know us better.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full object-contain">
              <img
                src={DealMakingMedium}
                alt="Deal making"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Explore;
