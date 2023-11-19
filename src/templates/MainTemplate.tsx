import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

interface MainTemplateProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const MainTemplate = ({
  children,
  title = 'Home',
  description = 'Oskar Kwaśniewski - React Native developer',
}: MainTemplateProps): JSX.Element => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1 } },
  };
  return (
    <>
      <Head>
        <title>Oskar Kwaśniewski - {title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content={`Oskar Kwaśniewski - ${title}`}
          key="ogtitle"
        />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      <Toaster />
      <Header />
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'spring' }}
        className="container w-full h-full md:px-16 px-4 mx-auto scroll-smooth min-h-[88vh]"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default MainTemplate;
