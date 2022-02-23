import { motion } from "framer-motion";
import { itemVariants } from "src/lib/animations";
import Button from "src/components/Button";
import Image from "next/image";
import HomeImage from "public/home.svg";
import { useIntersectionRef } from "src/lib/useIntersectionRef";

const Hero = () => {
  const [sectionRef, intersection] = useIntersectionRef();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
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
            className='mb-3 text-4xl text-center font-bold text-gray-900 md:text-6xl'
          >
            Pomagam firmom zwiększać sprzedaż
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
