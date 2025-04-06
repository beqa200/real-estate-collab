import { useGeneral } from "../../contexts/context";

const Connect: React.FC = () => {
  const { Stars } = useGeneral();
  return (
    <div>
      <img src={Stars} alt="Stars" />
      <h3>Let's Connect</h3>
    </div>
  );
};

export default Connect;
