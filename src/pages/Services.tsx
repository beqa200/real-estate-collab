import BoxesProps from '../components/services/BoxesProps';
import Text from '../components/services/Text'
import Unlock from '../components/services/Unlock';

const Services: React.FC = () => {
  return <div className='max-w-[1200px] px-7  mx-auto'>
    <Text />
    <BoxesProps />
    <Unlock />
  </div>
};

export default Services;
