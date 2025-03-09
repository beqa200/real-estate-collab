const Faq: React.FC<{ stars: string }> = ({ stars }) => {
  return (
    <div className="w-[95.5%] mx-auto mt-[6.1rem]">
      <img src={stars} alt="Stars" />
      <h3 className="title">Frequently Asked Questions</h3>
      <p className="about mt-[0.6rem]">
        Find answers to common questions about Estatein's services, property
        listings, and the real estate process. We're here to provide clarity and
        assist you every step of the way.
      </p>
      <div className="mt-[4rem] p-[3rem] rounded-[1rem] bg-[#141414] border-1 border-[#262626]">
        <div>
          <h6 className="title text-[1.8rem] mt-[2.4rem]">
            How do I search for properties on Estatein?
          </h6>
          <p className="title text-[1.4rem] font-medium mt-[2rem] text-[#999]">
            Learn how to use our user-friendly search tools to find properties
            that match your criteria.
          </p>
          <button
            className="w-full h-[4.6rem] rounded-[8px] bg-[#1a1a1a] border-1 border-[#262626]
                      text-[1.4rem] font-medium leading-[1.31] teacking-[-0.08px] text-white mt-[2rem]"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
