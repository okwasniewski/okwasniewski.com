"use client";

import Image from "next/image";
import Heading from "@/components/Heading";
import { itemVariants, containerVariants } from "@/lib/animations";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import contactImage from "public/contact.svg";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ContactContent() {
  return (
    <div className="mt-10">
      <Heading heading="Contact" subHeading="Do you have any questions?" />
      <div className="flex flex-col items-center justify-around md:flex-row">
        <motion.ul
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="mb-10 md:mb-0 dark:text-gray-200"
        >
          <motion.li className="flex m-2" variants={itemVariants}>
            <FaGithub className="w-6 h-6 mr-2" />
            <a
              href="https://github.com/okwasniewski"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </motion.li>
          <motion.li className="flex m-2" variants={itemVariants}>
            <FaLinkedin className="w-6 h-6 mr-2" />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/oskar-kwa%C5%9Bniewski-452977207/"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </motion.li>
          <motion.li className="flex m-2" variants={itemVariants}>
            <FaEnvelope className="w-6 h-6 mr-2" />
            <button
              type="button"
              className="cursor-pointer text-left"
              onClick={() => {
                toast(
                  <div>
                    <p>This link is not clickable!</p> If you want to open the
                    default mail app <span> </span>
                    <a
                      className="font-bold text-blue-500"
                      href="mailto:hello@oskarkwasniewski.dev"
                    >
                      click here!
                    </a>
                  </div>,
                  {
                    icon: "📤",
                  },
                );
              }}
            >
              hello@oskarkwasniewski.dev
            </button>
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
          <Image
            src={contactImage}
            width={500}
            height={250}
            alt="Contact"
            className="dark:invert"
          />
        </motion.div>
      </div>
    </div>
  );
}
