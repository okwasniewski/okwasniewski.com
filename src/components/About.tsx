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
      <Heading heading="About me" subHeading="Few words about me" />
      <div id="about" className="flex flex-col justify-between md:flex-row">
        <motion.div
          className="md:w-1/2"
          initial={{ x: -200, opacity: 0 }}
          animate={
            intersection?.isIntersecting
              ? { x: 0, opacity: 1, transition: { delay: 0.4, type: "spring" } }
              : { x: -200, opacity: 0 }
          }
        >
          <p className="text-gray-500 dark:text-gray-200">
            My name is Oskar Kwasniewski. I'm a Senior Recent Native Developer
            at{" "}
            <a
              href="https://www.callstack.com/"
              target="__blank"
              rel="noopener"
            >
              {`{Callstack}`}
            </a>
            . I'm an open source enthusiast contributing to libraries from the
            React Native ecosystem. I have over 10+ merged PRs to React Native
            Core. <br></br>I'm focused on strengthening my knowledge around
            native development in Swift, Objective-C, Java and Kotlin. In my
            free time I enjoy gravel cycling and learning new things.
          </p>
          <h3 className="mt-4 text-lg font-semibold dark:text-gray-200">
            Links
          </h3>
          <ul className="dark:text-gray-200">
            <li className="flex m-2">
              <FaGithub className="w-6 h-6 mr-2" />
              <a href="https://github.com/okwasniewski" target="_blank">
                Github
              </a>
            </li>
            <li className="flex m-2">
              <FaLinkedin className="w-6 h-6 mr-2" />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/oskar-kwa%C5%9Bniewski-452977207/"
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
          className="justify-center mt-10 md:mt-0 md:w-1/2 hidden md:flex"
        >
          <Image src={AboutImage} alt="About me" className="dark:invert" />
        </motion.div>
      </div>
    </div>
  );
};
export default About;
