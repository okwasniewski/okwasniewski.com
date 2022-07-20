import Heading from "src/components/Heading";
import Image from "next/image";
import AboutImage from "public/about.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useIntersectionRef } from "src/lib/useIntersectionRef";
import { motion } from "framer-motion";

const About = () => {
  const [sectionRef, intersection] = useIntersectionRef();
  return (
    <div ref={sectionRef}>
      <Heading heading='O mnie' subHeading='Kilka słów o mnie' />
      <div id='about' className='flex flex-col justify-between md:flex-row'>
        <motion.div
          className='md:w-1/2'
          initial={{ x: -200, opacity: 0 }}
          animate={
            intersection?.isIntersecting
              ? { x: 0, opacity: 1, transition: { delay: 0.4, type: "spring" } }
              : { x: -200, opacity: 0 }
          }
        >
          <p className='text-gray-500'>
            Nazywam się Oskar Kwaśniewski, tworzeniem stron i programowaniem
            zajmuje się od ponad 3 lat. Aktualnie pracuję jako React Native
            Developer w{" "}
            <a href='https://www.callstack.com/' target='__blank' rel='noopener'>
              {`{Callstack}`}
            </a>
            . <br></br>
            <br></br> Studiuję na Wydziale Informatyki na Zachodniopomorskim
            Uniwersytecie Technologicznym. Mam doświadczenie w pracy zwarówno z
            dużymi jaki i małymi firmami. Lubię tworzyć strony i korzystać z
            nieszablonowych rozwiązań. <br></br>
            <br></br> W wolnym czasie jeżdżę na rowerze 🚴🏻 lub uczę się czegoś
            nowego 💻.
          </p>
          <h3 className='mt-4 text-lg font-semibold'>Linki</h3>
          <ul>
            <li className='flex m-2'>
              <FaGithub className='w-6 h-6 mr-2' />
              <a href='https://github.com/okwasniewski' target='_blank'>
                Github
              </a>
            </li>
            <li className='flex m-2'>
              <FaLinkedin className='w-6 h-6 mr-2' />
              <a
                target='_blank'
                href='https://www.linkedin.com/in/oskar-kwa%C5%9Bniewski-452977207/'
              >
                Linkedin
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={
            intersection?.isIntersecting
              ? {
                  scale: 1,
                  opacity: 1,
                  transition: { delay: 0.4, type: "spring", stiffness: 100 },
                }
              : { scale: 0.8, opacity: 0 }
          }
          className='justify-center mt-10 md:mt-0 md:w-1/2 hidden md:flex'
        >
          <Image src={AboutImage} alt='O mnie' />
        </motion.div>
      </div>
    </div>
  );
};
export default About;
