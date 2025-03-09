const Faq: React.FC<{ stars: string }> = ({ stars }) => {
  return (
    <div className="w-[95.5%] mx-auto mt-[7.1rem]">
      <img src={stars} alt="Stars" />
      <h3 className="title">What Our Clients Says</h3>
      <p className="about mt-[0.6rem]">
        Read the success stories and heartfelt testimonials from our valued
        clients. Discover why they chose Estatein for their real estate needs.
      </p>
    </div>
  );
};

export default Faq;
