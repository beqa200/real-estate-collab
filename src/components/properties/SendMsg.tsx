const SendMsg: React.FC<{ stars: string }> = ({ stars }) => {
  return (
    <div className="w-[91.5%] mx-auto mt-[6.1rem]">
      <img src={stars} alt="Stars" />
      <h3 className="title">Let's Make it Happen</h3>
      <p className="about mt-[0.8rem]">
        Ready to take the first step toward your dream property? Fill out the
        form below, and our real estate wizards will work their magic to find
        your perfect match. Don't wait; let's embark on this exciting journey
        together.
      </p>
    </div>
  );
};

export default SendMsg;
