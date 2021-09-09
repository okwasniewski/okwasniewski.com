import Image from 'next/image';
import Heading from 'src/components/Heading';
import MainTemplate from 'src/templates/MainTemplate';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import contactImage from 'public/contact.svg';
import { motion } from 'framer-motion';

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0, transition: { duration: 0.5 } },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <MainTemplate
      title='Kontakt'
      description='Chcesz nawiązać współpracę? Napisz do mnie!'
    >
      <div className='mt-10 mb-32'>
        <Heading heading='Kontakt' subHeading='Masz jakieś pytania?' />
        <div className='flex flex-col items-center justify-around md:flex-row'>
          <motion.ul
            initial='hidden'
            animate='show'
            variants={container}
            className='mb-10 md:mb-0'
          >
            <motion.li className='flex m-2' variants={item}>
              <FaGithub className='w-6 h-6 mr-2' />
              <a href='https://github.com/okwasniewski' target='_blank'>
                Github
              </a>
            </motion.li>
            <motion.li className='flex m-2' variants={item}>
              <FaLinkedin className='w-6 h-6 mr-2' />
              <a
                target='_blank'
                href='https://www.linkedin.com/in/oskar-kwa%C5%9Bniewski-452977207/'
              >
                Linkedin
              </a>
            </motion.li>
            <motion.li className='flex m-2' variants={item}>
              <FaEnvelope className='w-6 h-6 mr-2' />
              oskarkwasniewski@icloud.com
            </motion.li>
          </motion.ul>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Image src={contactImage} width={500} height={250} alt='Kontakt' />
          </motion.div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Contact;
