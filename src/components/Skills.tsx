import { motion } from 'framer-motion';
import Heading from 'src/components/Heading';
import Icon from 'src/components/Icon';
import { FaReact, FaJs, FaGit, FaPhp } from 'react-icons/fa';
import { useIntersectionRef } from 'src/lib/useIntersectionRef';
import { itemVariants, containerVariants } from 'src/lib/animations';
const Skills = () => {
  const [sectionRef, intersection] = useIntersectionRef();
  return (
    <motion.div
      ref={sectionRef}
      animate={intersection?.isIntersecting ? { opacity: 1 } : { opacity: 0 }}
      className='px-2 py-10 mt-10 bg-blue-500 full-width'
    >
      <div className='container mx-auto'>
        <Heading
          heading='Technologie'
          subHeading='Korzystam z najnowszych technologii'
          white
        />
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={intersection?.isIntersecting ? 'show' : 'hidden'}
          className='flex flex-col items-center justify-center mb-10 md:justify-around md:flex-row'
        >
          <Icon Element={FaReact} text='React' variants={itemVariants} />
          <Icon Element={FaPhp} text='PHP' variants={itemVariants} />
          <Icon Element={FaGit} text='Git' variants={itemVariants} />
          <Icon Element={FaJs} text='Javascript' variants={itemVariants} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
