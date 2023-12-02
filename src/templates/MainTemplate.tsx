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
  description = 'Hey! I am Oskar Kwaśniewski, a Software Engieneer from Poland with passion to Open Source. I enjoy building things for the web and mobile.',
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
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
