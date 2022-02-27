import { motion } from "framer-motion";
import Heading from "src/components/Heading";
import Icon from "src/components/Icon";
import { FaReact, FaGit, FaPhp, FaAppStoreIos, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";
import { useIntersectionRef } from "src/lib/useIntersectionRef";
import { itemVariants, containerVariants } from "src/lib/animations";
const Skills = () => {
  const [sectionRef, intersection] = useIntersectionRef();
  return (
    <motion.div
      ref={sectionRef}
      animate={intersection?.isIntersecting ? { opacity: 1 } : { opacity: 0 }}
      className='px-2 py-10 mt-10 bg-[url("/hero.jpg")] bg-fixed bg-center bg-cover bg-no-repeat full-width'
    >
      <div className='container mx-auto'>
        <Heading
          heading='Technologie'
          subHeading='Korzystam z najnowszych technologii'
        />
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={intersection?.isIntersecting ? "show" : "hidden"}
          className='flex flex-col text-gray-800 items-center justify-center mb-10 md:justify-around md:flex-row'
        >
          <Icon
            Element={SiTypescript}
            text='Typescript'
            variants={itemVariants}
          />
          <Icon
            Element={FaReact}
            text='React + React Native'
            variants={itemVariants}
          />
          <Icon
            Element={SiVisualstudiocode}
            text='Visual Studio Code'
            variants={itemVariants}
          />
          <Icon
            Element={SiTailwindcss}
            text='Tailwind CSS'
            variants={itemVariants}
          />
          <Icon Element={FaGit} text='Git' variants={itemVariants} />
          <Icon Element={FaGithub} text='Github' variants={itemVariants} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
