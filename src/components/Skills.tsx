import Heading from 'src/components/Heading'
import Icon from 'src/components/Icon'
import {
    FaReact,
    FaJs,
    FaGit,
    FaPhp,
  } from 'react-icons/fa';
  
const Skills = () => {
  return (
    <div className='px-2 py-10 mt-10 bg-blue-500 full-width'>
      <div className='container mx-auto'>
        <Heading
          heading='Technologie'
          subHeading='Korzystam z najnowszych technologii'
          white
        />
        <div className='grid justify-between mt-10 mb-10 gtc-auto'>
          <Icon Element={FaReact} text='React' />
          <Icon Element={FaPhp} text='PHP' />
          <Icon Element={FaGit} text='Git' />
          <Icon Element={FaJs} text='Javascript' />
        </div>
      </div>
    </div>
  );
};

export default Skills
