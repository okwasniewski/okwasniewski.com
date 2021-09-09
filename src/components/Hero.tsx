import { motion } from 'framer-motion';
import Button from 'src/components/Button';
import Image from 'next/image';
import HomeImage from 'public/home.svg';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0, transition: { duration: 0.5 } },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className='flex items-center justify-around mx-auto mt-10 mb-20'>
      <div className='w-full'>
        <motion.div variants={container} initial='hidden' animate='show'>
          <motion.h1
            variants={item}
            className='mb-6 text-3xl font-bold text-gray-900 md:text-5xl'
          >
            Pomagam firmom
          </motion.h1>
          <motion.h2
            variants={item}
            className='mb-6 text-2xl font-bold text-gray-900 md:text-4xl'
          >
            zwiększać sprzedaż
          </motion.h2>
          <motion.h3 variants={item} className='text-xl text-gray-900'>
            tworząc <strong>przejrzyste</strong> strony internetowe
          </motion.h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className='mt-8'
        >
          <Button href='/portfolio'> Zobacz więcej </Button>
          <Button href='/contact' secondary>
            Kontakt
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.5, type: 'spring', stiffness: 100 },
        }}
        className='hidden md:block'
      >
        <Image src={HomeImage} width={500} alt='Zdjęcie na stronie głównej' />
      </motion.div>
    </div>
  );
};
export default Hero;
