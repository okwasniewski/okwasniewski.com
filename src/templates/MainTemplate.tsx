import { motion } from 'framer-motion';
import Head from 'next/head';
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
  description = 'Nazywam się Oskar Kwaśniewski, pomagam firmom zwiększać sprzedać tworząc przejrzyste strony internetowe.',
}: MainTemplateProps): JSX.Element => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1 } },
  };
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>Oskar Kwaśniewski - {title}</title>
        <meta name='description' content={description} />
        <meta
          property='og:site_name'
          content='Oskar Kwaśniewski'
          key='ogsitename'
        />
        <meta property='og:url' content='okwasniewski.com' key='ogurl' />
        <meta
          property='og:image'
          content='https://okwasniewski.com/preview_image.jpg'
          key='ogimage'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={`Oskar Kwaśniewski - ${title}`}
          key='ogtitle'
        />
        + <meta property='og:description' content={description} key='ogdesc' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ type: 'spring' }}
        className='container w-full h-full px-4 mx-auto'
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default MainTemplate;
