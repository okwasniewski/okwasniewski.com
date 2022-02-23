import { motion } from "framer-motion";
import { itemVariants, containerVariants } from "src/lib/animations";
import Button from "src/components/Button";
import { useIntersectionRef } from "src/lib/useIntersectionRef";
import { useEffect, useState } from "react";
const texts = ["zwiększać sprzedaż", "docierać do klientów", "osiągnąć sukces"];

const item = {
  hidden: { y: -30 },
  show: { y: 0 },
};

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
    <div className='flex items-center justify-around mx-auto mb-20 bg-center h-[45vh]'>
      <div
        className='w-full flex flex-col items-center justify-center'
        ref={sectionRef}
      >
        <motion.div
          variants={container}
          initial='hidden'
          className='flex flex-col items-center justify-center'
          animate={intersection?.isIntersecting ? "show" : "hidden"}
        >
          <motion.h1
            variants={itemVariants}
            className='mb-3 text-4xl font-bold text-gray-900 md:text-6xl overflow-hidden py-2 text-center'
          >
            Pomagam firmom <span></span>
            {texts.map((text, index) => {
              if (activeIndex !== index) {
                return null;
              }
              return (
                <span className='relative bg-blue-50 overflow-hidden'>
                  <motion.span
                    variants={item}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                    className='absolute font-medium'
                  >
                    {text}
                  </motion.span>
                  <span className='opacity-0'>{text}</span>
                </span>
              );
              // return (
              //   <>
              //     <motion.span
              //       key={index}
              //       className='underline text-blue-500 font-medium '
              //     >
              //       {text}
              //     </motion.span>
              //     {/* <span className='opacity-0'>{text}</span> */}
              //   </>
              // );
            })}
          </motion.h1>
          <motion.h3
            variants={itemVariants}
            className='text-2xl md:text-3xl text-gray-800 text-center'
          >
            tworząc <strong>przejrzyste</strong> strony internetowe
          </motion.h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            intersection?.isIntersecting
              ? { opacity: 1, transition: { duration: 1 } }
              : { opacity: 0 }
          }
          className='mt-8 flex md:flex-row flex-col items-center'
        >
          <Button href='/portfolio'>Zobacz więcej</Button>
          <div className='m-2 md:hidden block' />
          <Button href='/contact' secondary>
            Kontakt
          </Button>
        </motion.div>
      </div>
      <div className='absolute inset-0 bg-[url("/hero.jpg")] opacity-50 -z-10 bg-center bg-no-repeat md:h-[56vh] h-[58vh]' />
    </div>
  );
};
export default Hero;
