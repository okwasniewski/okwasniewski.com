import { motion } from 'framer-motion';
import { itemVariants } from 'src/lib/animations';
import Button from 'src/components/Button';
import { useIntersectionRef } from 'src/lib/useIntersectionRef';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const texts = ['Oskar', 'a Software Engineer', 'a React Native Developer'];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  const [sectionRef, intersection] = useIntersectionRef();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (activeIndex === texts.length - 1) {
        setActiveIndex(0);
        return;
      }
      setActiveIndex((prev) => prev + 1);
    }, 3500);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="flex items-center justify-around mx-auto mb-24 bg-center h-[45vh]">
      <div
        className="flex flex-col items-center justify-center w-full"
        ref={sectionRef}
      >
        <motion.div
          variants={container}
          initial="hidden"
          className="flex flex-col items-center justify-center"
          animate={intersection?.isIntersecting ? 'show' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center mb-3 lg:flex-row"
          >
            <Image
              src="/oskar.jpg"
              width={130}
              height={130}
              alt="Oskar Kwaśniewski"
              className="hidden rounded-full shadow-md lg:flex lg:mr-5"
            />
            <motion.h1 className="py-2 mr-1 overflow-hidden text-4xl font-semibold text-center text-gray-900 dark:text-gray-200 md:text-6xl">
              {activeIndex === 0 ? 'Hey!' : null} I'm <span />
            </motion.h1>
            <motion.h1 className="px-3 py-2 overflow-hidden text-3xl font-semibold text-center text-gray-900 dark:text-gray-200 md:text-6xl">
              {texts.map((text, index) => {
                if (activeIndex !== index) {
                  return null;
                }
                return (
                  <motion.span
                    key={index}
                    className="block italic font-medium text-gray-800 dark:text-gray-200"
                    initial={{ translateY: -100 }}
                    animate={{ translateY: 0 }}
                    exit={{ translateY: 100 }}
                  >
                    {text}
                  </motion.span>
                );
              })}
            </motion.h1>
          </motion.div>
          <motion.h3
            variants={itemVariants}
            className="text-2xl text-center text-gray-800 md:text-3xl dark:text-gray-200/80"
          >
            I enjoy building things for the web and mobile.
          </motion.h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            intersection?.isIntersecting
              ? { opacity: 1, transition: { duration: 1 } }
              : { opacity: 0 }
          }
          className="flex flex-col items-center mt-8 md:flex-row"
        >
          <Button href="/portfolio">Portfolio</Button>
          <div className="block m-2 md:hidden" />
          <Button href="/contact" secondary>
            Contact
          </Button>
        </motion.div>
      </div>
      <div className="hero-background absolute bg-fixed inset-0 opacity-80 shadow-inner -z-10 bg-center bg-no-repeat md:h-[56vh] h-[63vh]" />
    </div>
  );
};
export default Hero;
